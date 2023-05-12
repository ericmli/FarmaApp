import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background: ${props => props.theme.orange[20]};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  elevation: 1;
  
`
export const ButtonText = styled.Text`
  color: ${props => props.theme.background};
  font-weight: 700;
  font-size: 16px;
`
