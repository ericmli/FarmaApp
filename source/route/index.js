import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../page/login'
import Register from '../page/register'
import { BottomTabs } from './BottomTab'
import { Product } from '../page/product'
import { Admin } from '../page/admin'

const Stack = createNativeStackNavigator()
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#FFF'
  },
  headerTintColor: 'black',
  headerBackTitle: 'Back'
}

export default function Navigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName='SendHome'>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SendHome"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Product"
          component={Product}
        />

        <Stack.Screen
          name="Admin"
          component={Admin}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
