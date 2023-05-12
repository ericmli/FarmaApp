import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'

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

export const ContainerCreateAccount = styled.View`
  height: 60px;
  flex-direction: row;
  align-items:center;
  justify-content: flex-end;
`

export const CreateAccount = styled.Text`
  color: ${props => props.theme.color};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  padding-right: 40px;
  left: 30px;
  z-index: 1;
`
export const Icone = styled(Icon)`
  color: ${(props) => props.theme.orange[10]};
  font-size: 20px;
  margin-top: 2px;
`
