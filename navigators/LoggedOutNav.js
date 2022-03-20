import React from 'react';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import CreateAccount from '../screens/CreateAccount';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo';

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (

    
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

 
  );
}
