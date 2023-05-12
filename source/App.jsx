import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Navigation from './route'
import AuthProvider from './service/service'

export default function App() {
  const deviceTheme = useColorScheme()
  const themes = theme[deviceTheme] || theme.ligth

  let bar = null
  if (themes.color === '#000') {
    bar = 'dark-content'
  } else {
    bar = 'ligth-content'
  }

  return (
    <ThemeProvider theme={themes}>
      <AuthProvider>
        <StatusBar backgroundColor={themes.background} barStyle={bar} />
        <Navigation />
      </AuthProvider>
    </ThemeProvider>
  )
}
