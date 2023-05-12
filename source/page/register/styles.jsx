import styled from 'styled-components/native'

export const Body = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.background};
`

export const Container = styled.SafeAreaView`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
`

export const Text = styled.Text`
  color: ${props => props.theme.color};
  font-size: 20px;
`
