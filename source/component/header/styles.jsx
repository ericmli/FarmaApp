import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'

export const Container = styled.View`
  height: 140px;
  justify-content: space-between;
  margin-bottom: 60px;
`

export const ContainerIcon = styled.TouchableOpacity`
  height: 80px;
  justify-content: center;
`

export const Icone = styled(Icon)`
  color: ${(props) => props.theme.color};
  font-size: 24px;
`

export const Text = styled.Text`

  font-size: 34px;
  line-height: 34px;
  font-weight: 600;
  color: ${(props) => props.theme.color};
`
