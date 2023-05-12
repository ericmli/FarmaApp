import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'

export const Container = styled.ScrollView`
  background-color: #F9F9F9;
`
export const Body = styled.View`
  padding: 10px;
  flex: 1;
`

export const Image = styled.Image`
  width: 100%;
  height: 350px;
`

export const Icone = styled(Icon)`
  color: ${(props) => props.theme.color};
  font-size: 24px;
`

export const ContainerButton = styled.View`
  background: white;
  border-top-width : 0.5px;
  padding-left: 15px;
  padding-right: 15px;
  border-color: #2525253e;
`

export const ContainerSpace = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const NameProduct = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.black[20]};
  font-weight: 500;
`

export const Category = styled.Text`
  font-size: 11px;
  line-height: 11px;
  color: ${(props) => props.theme.black[20]};
  margin-top: 5px;
  margin-bottom: 5px;
`

export const ContainerCartAmount = styled.View`
    flex-direction: row;
    gap: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    
`

export const Amount = styled.Text`
    font-size: 30px;
    padding: 5px;
    color: black;
    font-weight: 200;
    margin-top: auto;
    margin-bottom: auto;
`

export const TextCartAmount = styled.Text`
    border-width: 1px;
    border-color: ${(props) => props.color ? 'grey' : 'black'};
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    padding: 5px;
    width: 50px;
    color: ${(props) => props.color ? 'grey' : 'black'};
`
