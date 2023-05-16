import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Container, ContainerImage, ContainerImageText, Image, Text } from './styles'
import { Button } from '../../component/button'
import { FlatlistProducts } from '../../component/flatlistProducts'
import api from '../../service'
import { useFocusEffect } from '@react-navigation/native'

function Head() {
  return (
    <ContainerImage>
      <StatusBar backgroundColor='transparent' translucent={true} />
      <Image source={require('../../assets/img/nham.jpg')} />
      <ContainerImageText>
        <Text>Sale in Products</Text>
        <Button name='Check' />
      </ContainerImageText>
    </ContainerImage>
  )
}

export function Home({ navigation }) {
  const [item, setItem] = React.useState([])
  const [itemBlackList, setitemBlackList] = React.useState([])
  useFocusEffect(
    React.useCallback(() => {
      getAPI()
    }, [])
  )
  async function getAPI() {
    const response = await api.get('products/list')
    const { add, remove } = response.data.products.reduce(
      (result, item) => {
        if (item.valor < 50) {
          result.add.push(item)
        } else {
          result.remove.push(item)
        }
        return result
      },
      { add: [], remove: [] }
    )
    setItem(add)
    setitemBlackList(remove)
  }
  return (
    <SafeAreaView>
      <Container>
        <Head />
        <FlatlistProducts
          Category='Sale'
          SubCategory='Lowest market price'
          data={item}
        />
        <FlatlistProducts
          Category='Black Medicine Label'
          SubCategory='For crazy people'
          data={itemBlackList}
          navigation={navigation}
        />
      </Container>
    </SafeAreaView>
  )
}
