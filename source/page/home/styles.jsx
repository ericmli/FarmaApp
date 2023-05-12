import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  background-color: #F9F9F9;
`
export const ContainerImage = styled.View`
  height: 536px;
`

export const Image = styled.Image`
  width: 100%;
  height: 536px;
  bottom: 20px;
`
export const ContainerImageText = styled.View`
  position: absolute;
  font-size: 16px;
  color: black;
  bottom: 10%;
  width: 50%;
  left: 5%;
`

export const Text = styled.Text`
  font-size: 48px;
  line-height: 48px;
  font-weight: 900;
  color: ${(props) => props.theme.white[10]};

`
