import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Body = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  width: 30%;
  gap: 10px;
`

export const Text = styled.Text`
  color: ${props => props.theme.color};
  font-size: 16px;
  font-weight: 500;
`

export const Icone = styled(Icon)`
  color: ${(props) => props.color || 'black'};
  font-size: 26px;
  margin-top: 2px;
`
