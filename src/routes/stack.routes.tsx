import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { PeopleDetails } from '../components/PeopleDetails';
import { SignIn } from '../screens/SignIn';

const {Navigator, Screen} = createNativeStackNavigator();

export function StackRoutes() {
  return (
      <Navigator  screenOptions={{
        headerShown: false,    
            
      }} >
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Home" component={Home} />
        <Screen name="PeopleDetails" component={PeopleDetails} /> 
      </Navigator>
  );
}
