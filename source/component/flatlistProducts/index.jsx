import React from 'react'
import { FlatList } from 'react-native'
import { Back, Category, Container, SubCategory, Text } from './styles'
import { API_HOST } from '../../service/host'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

export function FlatlistProducts(props) {
  const navigation = useNavigation()

  async function handlePress (id) {
    await AsyncStorage.setItem('idProduct', id)
    navigation.navigate('Product')
  }
  const list = ({ item }) => (
    <Container onPress={() => handlePress(item._id)}>
      <Back source={{ uri: `${API_HOST}/api/file/view/${item.image}` }} />
      <Text>{item.nameProduct}</Text>
      <Text>${item.valor}</Text>
    </Container>
  )
  return (
    <>
      <Category>{props?.Category}</Category>
      <SubCategory>{props?.SubCategory}</SubCategory>
      <FlatList
        data={props?.data}
        decelerationRate='fast'
        renderItem={list}
        keyExtractor={(item) => item._id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </>
  )
}
