import React from 'react';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import CreateAccount from '../screens/CreateAccount';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitle: () => false,
          headerTransparent: true,
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Create Account" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
