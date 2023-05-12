import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  position: relative;
  margin: 10px;
`
export const Text = styled.Text`
  color: ${props => props.theme.color};
  font-size: 20px;
`

export const Back = styled.Image`
  width: 165px;
  height: 266px;
  padding: 20px;
  object-fit: cover;
  border-radius: 5px;
`

export const Category = styled.Text`
  color: ${props => props.theme.color};
  font-size: 30px;
  margin-left: 10px;
  font-weight: 800;
`

export const SubCategory = styled.Text`
  color: ${props => props.theme.color};
  font-size: 16px;
  margin-left: 10px;
  font-weight: 300;
`
