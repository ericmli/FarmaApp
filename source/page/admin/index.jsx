import React from 'react'
import { Back, Body, Container, ContainerFlat, ContainerImage, FlatList, TextTitle } from './styles'
import { API_HOST } from '../../service/host'
import { Input } from '../../component/input'
import * as yup from 'yup'
import { Button } from '../../component/button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../service'
import { Header } from '../../component/header'

const obj = [
  {
    id: 1,
    img: 'dsaiorwu4ryek324fsdds.jpg'
  },
  {
    id: 2,
    img: 'dsad34frsa3456htrgsadfs.jpg'
  },
  {
    id: 3,
    img: 'da873nasdfddf833qkf.jpg'
  }
]
export function Admin({ navigation }) {
  const [objSelect, setObjSelect] = React.useState('dsaiorwu4ryek324fsdds.jpg')
  const [select, setSelect] = React.useState(1)

  function setCategoryOnPress(id) {
    setObjSelect(obj[id - 1].img)
  }

  const schema = yup.object().shape({
    nameProduct: yup.string().required(),
    category: yup.string().required(),
    estoque: yup.number().typeError().required(),
    description: yup.string().required(),
    valor: yup.number().typeError().required()
  })
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nameProduct: '',
      category: '',
      estoque: '',
      description: '',
      valor: ''
    },
    mode: 'all',

    resolver: yupResolver(schema)
  })

  async function onSubmit(input) {
    const obj = {
      nameProduct: input.nameProduct,
      category: input.category,
      estoque: input.estoque,
      description: input.description,
      valor: input.valor,
      image: objSelect
    }

    const response = await api.post('products/add', obj)
    console.log(response)
  }

  const list = ({ item }) => (
    <ContainerFlat onPress={() => {
      setSelect(item.id)
      setCategoryOnPress(item.id)
    }}>
      <ContainerImage value={select === item.id}>
        <Back source={{ uri: `${API_HOST}/api/file/view/${item.img}` }} />
      </ContainerImage>
    </ContainerFlat>
  )
  return (
    <Container>
      <Header onPress={() => navigation.goBack()}/>
      <TextTitle>Select Image Product</TextTitle>
      <FlatList
        data={obj}
        decelerationRate='fast'
        renderItem={list}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Body>
        <Input
          name="nameProduct"
          nameTop='Name Product'
          control={control}
          errors={errors}
          keyboardType='default'
        />
        <Input
          name="category"
          nameTop='Category Product'
          control={control}
          errors={errors}
          keyboardType='default'
        />
        <Input
          name="estoque"
          nameTop='Stock Product'
          control={control}
          errors={errors}
          keyboardType='number-pad'
        />
        <Input
          name="description"
          nameTop='Description Product'
          control={control}
          errors={errors}
          keyboardType='default'
        />
        <Input
          name="valor"
          nameTop='Value Product'
          control={control}
          errors={errors}
          keyboardType='number-pad'
        />
        <Button name='Send' onPress={handleSubmit(onSubmit)} />
      </Body>
    </Container>
  )
}
