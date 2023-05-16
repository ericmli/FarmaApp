import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  margin-top: 25px;
  align-items: center;
  width: 100%;
`

export const Body = styled.View`
  position: relative;
  width: 100%;
  padding: 10px;
`

export const FlatList = styled.FlatList`

`
export const ContainerFlat = styled.TouchableOpacity`
  padding: 10px;
  width: 150px;
  height: 150px;
`
export const ContainerImage = styled.View`
  background-color: ${props => props.value ? '#F01F0E' : '#F9F9F9'};
  padding: 3px;
  border-radius: 20px;
`
export const Back = styled.Image`
  width: 100%;
  height: 100%;
  padding: 20px;
  object-fit: cover;
  border-radius: 20px;
`
export const TextTitle = styled.Text`
  color: ${props => props.theme.color};
  font-size: 26px;
  font-weight: 500;
`
export const Text = styled.Text`
  color: ${props => props.theme.color};
  font-size: 20px;
`
