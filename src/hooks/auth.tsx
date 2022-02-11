import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import * as AuthSession from 'expo-auth-session';
import { AsyncStorage } from "react-native";
const {CLIENT_ID} = process.env
const {REDIRECT_URI} = process.env


interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
  signOut(): Promise<void>;
  userStorageLoading: boolean;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

export const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({children}: AuthProviderProps){
  const [user, setUser] = useState<User>({} as User)
  const [userStorageLoading, setUserStorageLoading] = useState(true)

  const userStorageKey = '@gofinances:user'
 
  async function signInWithGoogle(){
    try{
 
      const RESPONSE_TYPE = 'token'
      const SCOPE = encodeURI('profile email')

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const response = await AuthSession.startAsync({authUrl}) 

      console.log(response)
      // const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
      // const result = await response.json()

      // if(type === 'success') {
      //   const userLooged = {
      //     id: result.id,
      //     email: result.email,
      //     name: result.given_name,
      //     photo: result.picture
      //   }

      //   setUser(userLooged)
      //   await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLooged))
      // }
      

    }catch(error){
      throw new Error(error)
      console.log(error)
    }
  }

  async function signOut(){
    setUser({} as User)
    await AsyncStorage.removeItem(userStorageKey)
  }

  useEffect(() => {
    async function loadUserStorageData(){
      const userStoraged = await AsyncStorage.getItem(userStorageKey)
      if(userStoraged){
        const userLooged = JSON.parse(userStoraged) as User
        setUser(userLooged)
      }
      setUserStorageLoading(false)
    }
    loadUserStorageData()
  },[])

  return(
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut, userStorageLoading}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export {AuthProvider, useAuth}