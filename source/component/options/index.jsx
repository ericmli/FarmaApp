import React from 'react'
import { Body, Container, Icone, Text } from './styles'

export function Option(props) {
  return (
    <Container onPress={props.onPress}>
      <Body>
        <Icone name={props?.nameIcon}/>
        <Text>{props.text}</Text>
      </Body>
      <Icone name='chevron-right' color='grey' />
    </Container>
  )
}
