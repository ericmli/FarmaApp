import styled from 'styled-components'
import Icon from 'react-native-vector-icons/AntDesign'

export const View = styled.View`
  position: relative;
  width: 100%;
`

export const TextInput = styled.TextInput`
  text-align: left;
  font-size: 14px;
  color: black;
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

export const ContainerIcon = styled.View`
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

export const Check = styled(Icon)`
  color: green;
  font-size: 20px;
`
