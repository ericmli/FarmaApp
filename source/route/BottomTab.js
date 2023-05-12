import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'
import { Home } from '../page/home'
import { Bag } from '../page/bag'
import { Profil } from '../page/profil'

const Tab = createBottomTabNavigator()

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#F01F0E',
        tabBarLabelStyle: { fontSize: 14 },

        tabBarStyle: {
          height: 55,
          padding: 10
        }
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <Icon name="home" size={25} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="My Cart"
        component={Bag}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <Icon name="shopping-cart" size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profil}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <Icon name="user" size={25} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
