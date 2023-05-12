import React from 'react'

import { Icone, Container, ContainerIcon, Text } from './styles'

export function Header({ text, onPress }) {
  return (
    <Container>
      <ContainerIcon onPress={onPress}>
        <Icone name='left' />
      </ContainerIcon>
        <Text>{text}</Text>
    </Container>
  )
}
