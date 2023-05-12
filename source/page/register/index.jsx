import React from 'react'
import { Body, Container } from './styles'
import { Button } from '../../component/button'
import { Input } from '../../component/input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Header } from '../../component/header'
import { Password } from '../../component/inputPassword'
import * as yup from 'yup'
import axios from 'axios'

export default function Register({ navigation }) {
  const schema = yup.object().shape({
    email: yup.string().email('E-mail Invalid').required('E-mail Address is Required'),
    password: yup.string().max(20, 'Exceeded the maximum Number').required('Password is required')
  })
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })
  const onSubmit = async input => {
    const obj = {
      name: input.name,
      email: input.email,
      password: input.password
    }
    const response = await axios.post('http://192.168.1.246:8080/api/users', obj)
    console.log(response)
  }

  return (
    <Body>
      <Container>
        <Header text='Sign Up' onPress={ () => navigation.goBack()} />
        <Input
          name="name"
          nameTop='Name'
          control={control}
          errors={errors}
          keyboardType='default'
        />
        <Input
          name="email"
          nameTop='E-mail'
          control={control}
          errors={errors}
          keyboardType='email-address'
        />
        <Password
          name="password"
          nameTop='Password'
          control={control}
          errors={errors}
        />
        <Button name='Send' onPress={handleSubmit(onSubmit)} />
      </Container>
    </Body>
  )
}
