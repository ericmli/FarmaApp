import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [cart, setCart] = useState([])

  async function login(token) {
    setToken(token)
    await AsyncStorage.setItem('token', token.token)
    await AsyncStorage.setItem('name', token.user.name)
    await AsyncStorage.setItem('email', token.user.email)
    await AsyncStorage.setItem('id', token.user._id)
    await AsyncStorage.setItem('admin', JSON.stringify(token.user.admin))
  }

  async function logout() {
    setToken(null)
    await AsyncStorage.removeItem('token')
  }

  async function cartAdd(item) {
    const cartCopy = [...cart]
    const duplicated = cartCopy.findIndex(i => i._id === item._id)
    if (duplicated !== -1) {
      cartCopy[duplicated] = item
    } else {
      cartCopy.push(item)
    }
    cartSave(cartCopy)
  }

  async function cartSave(newCart) {
    setCart(newCart)
    await AsyncStorage.setItem('cart', JSON.stringify(newCart))
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, cartAdd, cartSave }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
