import React from 'react'
import { Container } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Option } from '../../component/options'
import { Text } from '../login/styles'

export function Profil({ navigation }) {
  const [admin, setAdmin] = React.useState()
  const [name, setName] = React.useState()
  React.useEffect(() => {
    loadProfil()
  }, [])
  async function loadProfil() {
    setAdmin(await AsyncStorage.getItem('admin'))
    setName(await AsyncStorage.getItem('name'))
  }
  return (
    <Container>
      <Text>Hello, {name}</Text>
      <Option nameIcon='home' text='Home' onPress={() => console.log('KKK')}/>
      <Option nameIcon='search' text='Search'/>
      <Option nameIcon='bell' text='Notification' />
      <Option nameIcon='shopping-cart' text='My Cart'/>
      <Option nameIcon='settings' text='Settings'/>
      <Option nameIcon='user' text='My Account'/>
      {admin && <Option nameIcon='cpu' text='Admin Painel' onPress={() => navigation.navigate('Admin')}/>}
    </Container>
  )
}
