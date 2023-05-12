import React from 'react'

import { ButtonContainer, ButtonText } from './styles'

export function Button({ name, onPress }) {
  return (
    <ButtonContainer onPress={onPress} >
      <ButtonText>{name}</ButtonText>
    </ButtonContainer>
  )
}
