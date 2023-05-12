import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'

export const Container = styled.SafeAreaView`
  padding: 10px;
`
export const ContainerFlat = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
  justify-content: space-between;
  background: white;
  border-radius: 20px;
  elevation: 1;
  height: 104px;
  width: 100%;
`
export const ContainerFlatText = styled.View`
  flex-direction: column;

  width: 70%;
  padding: 5px;
`
export const Text = styled.Text`
  color: ${props => props.theme.color};
  font-size: 16px;
  font-weight: 500;
`
export const TextTypeProduct = styled.Text`
  color: #2525254e;
  font-size: 12px;
  font-weight: 500;
`

export const Back = styled.Image`
  width: 30%;
  height: 100%;
  padding: 20px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
export const ContainerFlatIcon = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 5px;
  width: 100%;
`

export const Amount = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50px;
  background: white;
  elevation: 1;
  height: 40px;
  width: 40px;
  margin-left: 10px;
  margin-right: 10px;
`

export const Icone = styled(Icon)`
  color: ${(props) => props.color};
  font-size: 20px;
  margin-top: 2px;
  `
