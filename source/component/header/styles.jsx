import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'

export const Container = styled.View`
width: 100%;
padding: 5px;
`

export const ContainerIcon = styled.TouchableOpacity`
  height: 34px;
  width: 34px;
  border-width: 1px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`

export const Icone = styled(Icon)`
  color: ${(props) => props.theme.color};
  font-size: 20px;

`

export const Text = styled.Text`

  font-size: 34px;
  line-height: 34px;
  font-weight: 600;
  color: ${(props) => props.theme.color};
`
