import styled from 'styled-components'
import Icon from 'react-native-vector-icons/AntDesign'

export const View = styled.View`
  position: relative;
`

export const TextInput = styled.TextInput`
  width: 100%;
  text-align: left;
  font-size: 14px;
  color: ${props => props.theme.color};
  line-height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  background: white;
  height: 64px;
  elevation: 2;
  border-color: ${(props) => props.error ? '#F01F0E' : 'white'};
  border-width: 1px;
`

export const TextTopInput = styled.Text`
  top: 20px;
  left: 10px;
  z-index: 10;
  position: absolute;
  font-size: 11px;
  line-height: 11px;
  color: ${props => props.theme.color};
`

export const ContainerIcon = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 0;
  height: 100%;
  justify-content: center;
`

export const Close = styled(Icon)`
  color: #F01F0E;
  font-size: 20px;
`
