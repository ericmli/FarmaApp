import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 50px;
`

export const Text = styled.Text`
  color: ${props => props.theme.color};
  font-size: 16px;
  font-weight: 500;
`
