import React from 'react'
import { FlatList, StatusBar } from 'react-native'
import { Amount, Back, Container, ContainerFlat, ContainerFlatIcon, ContainerFlatText, Icone, Text, TextTypeProduct } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { API_HOST } from '../../service/host'
import { AuthContext } from '../../service/service'

export function Bag({ navigation }) {
  const { cartSave } = React.useContext(AuthContext)
  const [data, setData] = React.useState([])
  useFocusEffect(
    React.useCallback(() => {
      getStorage()
    }, [])
  )

  async function getStorage() {
    const response = await AsyncStorage.getItem('cart')
    const obj = JSON.parse(response)
    setData(obj)
  }

  function switchItem(calc, index) {
    if (calc) {
      data[index].quantidade += 1
    } else {
      if (data[index].quantidade > 1) {
        data[index].quantidade -= 1
      }
    }
    setData([...data])
    cartSave([...data])
  }

  function deleteItem(id) {
    const newData = data.filter(item => item._id !== id)
    setData([...newData])
    cartSave([...newData])
  }

  const list = ({ item, index }) => {
    return (
      <ContainerFlat>
        <Back source={{ uri: `${API_HOST}/api/file/view/${item.image}` }} />
        <ContainerFlatText>
          <Text>{item.nameProduct}</Text>
          <TextTypeProduct>Category: {item.category}</TextTypeProduct>

          <ContainerFlatIcon>
            <Amount onPress={() => switchItem(true, index)}><Icone name='plus' color='grey' /></Amount>
            <Text>{item.quantidade}</Text>
            <Amount onPress={() => switchItem(false, index)}><Icone name='minus' color='grey' /></Amount>
            <Amount onPress={() => deleteItem(item._id)}><Icone name='trash' color='black' /></Amount>
            <Container>
              <Text>${item.valor}</Text>
            </Container>
          </ContainerFlatIcon>
        </ContainerFlatText>
      </ContainerFlat >
    )
  }
  return (
    <Container>
      <StatusBar backgroundColor='transparent' translucent={false} />
      <FlatList
        data={data}
        decelerationRate='fast'
        renderItem={list}
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
      />

    </Container>
  )
}
