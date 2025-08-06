import * as Reactive from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import LandingScreen from './src/screens/LandingScreen';
import { StyleSheet, Text, View } from 'react-native';

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