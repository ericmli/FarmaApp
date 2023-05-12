import React from 'react'
import { FlatList } from 'react-native'
import { Amount, Back, Container, ContainerBottom, ContainerBottomText, ContainerFlat, ContainerFlatIcon, ContainerFlatText, Icone, Text, TextTypeProduct, TextValue } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { API_HOST } from '../../service/host'
import { AuthContext } from '../../service/service'
import { Button } from '../../component/button'
import { TextInput } from '../../component/input/styles'

export function Bag({ navigation }) {
  const { cartSave } = React.useContext(AuthContext)
  const [data, setData] = React.useState([])
  const [amount, setAmount] = React.useState(0)

  useFocusEffect(
    React.useCallback(() => {
      getStorage()
    }, [])
  )

  React.useEffect(() => {
    calcPrice()
  }, [data])

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

  async function calcPrice() {
    const value = await Promise.all(data.map(item => item.valor))
    const multiply = await Promise.all(data.map(item => item.quantidade))

    const total = value.reduce(function (total, i, index) {
      return total + i * multiply[index]
    }, 0)
    setAmount(total.toFixed(1))
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
              <TextValue>${item.valor}</TextValue>
            </Container>
          </ContainerFlatIcon>
        </ContainerFlatText>
      </ContainerFlat >
    )
  }
  return (
    <>
      <Container>
        <FlatList
          data={data}
          decelerationRate='fast'
          renderItem={list}
          keyExtractor={(item) => item._id}
          showsHorizontalScrollIndicator={false}
        />
      </Container>
      <ContainerBottom>
        <TextInput placeholder='Add Cupom'/>
        <ContainerBottomText>
        <TextTypeProduct>Total amount: </TextTypeProduct>
        <Text>${amount}</Text>
        </ContainerBottomText>
        <Button name='CHECK OUT' />
      </ContainerBottom>
    </>
  )
}
