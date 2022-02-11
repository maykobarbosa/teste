import React, { useState } from "react";
import { Image,  Alert, ActivityIndicator  } from "react-native";


import GoogleSvg from "../../assets/google.svg"
import HackerPng from "../../assets/hacker.png"
import { SignInSocialButton } from "../../components/SignInSocialButton";


import { 
  Container,
  Header,
  TitleWrapper,
  SignInTitle,
  Footer,
  FooterWrapper
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";
import theme from "../../styles/theme";


export function SignIn(){
  const navigation = useNavigation()
  function handleHome(){
    navigation.navigate('Home')
  }
  const {signInWithGoogle} = useAuth()
  const[isLoading, setIsloading] = useState(false)
  
 async function handleSignInWithGoogle() {
    try {
      setIsloading(true)
      return await signInWithGoogle()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Google')
      setIsloading(false)
    } 
 }   

  return(
    <Container>
      <Header>
        <TitleWrapper>
          <Image source={LogoPng} style={{ width: 120, height: 130 }} /> 
          <SignInTitle>
            Autenticação
          </SignInTitle>
        </TitleWrapper>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton 
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          { 
      isLoading && 
      
          <ActivityIndicator 
            color="red" 
            size='large'
          /> }
        </FooterWrapper>        
      </Footer>    
      <Image source={HackerPng} style={{width: 230, height: 270, right: -55, bottom: -60, position: "absolute", 
        transform: [
          { rotateX: "-25deg" },
          { rotateZ: "-25deg" }
        ]
      }  }  />
    </Container>
  )
}