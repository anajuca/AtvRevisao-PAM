import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import LandingScreen from './src/screens/LandingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name = 'Landing' component={LandingScreen} options={{headerShown: false}}/>
        <Stack.Screen name = 'Login' component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}