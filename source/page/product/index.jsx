import React from 'react'
import { Amount, Body, Category, Container, ContainerButton, ContainerCartAmount, ContainerSpace, Image, NameProduct, TextCartAmount } from './styles'
import { Text } from 'react-native'
import api from '../../service'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_HOST } from '../../service/host'
import { Button } from '../../component/button'
import { AuthContext } from '../../service/service'

export function Product() {
  const { cartAdd } = React.useContext(AuthContext)

  const [data, setData] = React.useState([])
  const [amount, setAmount] = React.useState(1)
  React.useEffect(() => {
    getAPI()
  }, [])
  async function getAPI() {
    const id = await AsyncStorage.getItem('idProduct')
    const response = await api.get(`/products/get/${id}`)
    setData(await response.data)
  }
  async function sendCart(i) {
    await cartAdd({ ...i, quantidade: amount })
    // console.log({ ...i, quantidade: amount })
  }
  return (
    <>
      <Container>
        <Image source={{ uri: `${API_HOST}/api/file/view/${data.image}` }} />
        <Body>
          <ContainerSpace>
            <NameProduct>{data.nameProduct}</NameProduct>
            <NameProduct>${data.valor}</NameProduct>
          </ContainerSpace>
          <Category>{data.category}</Category>
          <Text>{data.description}</Text>
          <Text>{data.estoque}</Text>

        </Body>
      </Container>

      <ContainerButton>
        <ContainerSpace>
          <Amount>{amount}</Amount>
          <ContainerCartAmount>
            <TextCartAmount onPress={() => setAmount(amount + 1)}>+</TextCartAmount>
            <TextCartAmount onPress={() => amount > 1 && setAmount(amount - 1)}>-</TextCartAmount>
          </ContainerCartAmount>
        </ContainerSpace>
        <Button name='ADD TO CART' onPress={() => sendCart(data)} />
      </ContainerButton>
    </>
  )
}
