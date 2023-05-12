import React from 'react'
import { Body, Container, ContainerCreateAccount, CreateAccount, Icone } from './styles'
import { Button } from '../../component/button'
import { Input } from '../../component/input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Header } from '../../component/header'
import { Password } from '../../component/inputPassword'
import * as yup from 'yup'
import api from '../../service'
import { AuthContext } from '../../service/service'

export default function Login({ navigation }) {
  const { login } = React.useContext(AuthContext)
  const schema = yup.object().shape({
    email: yup.string().email('E-mail Invalid').required('E-mail Address is Required'),
    password: yup.string().max(20, 'Exceeded the maximum Number').required('Password is required')
  })
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'all',

    resolver: yupResolver(schema)
  })
  const onSubmit = async input => {
    const obj = {
      email: input.email,
      password: input.password
    }
    try {
      const response = await api.post('auth/login', obj)
      login(response.data.data)
      navigation.navigate('Home')
    } catch {
      alert('passou nao mano')
    }
  }
  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    } else {
      alert('Tem tela pra voltar nao noia')
    }
  }
  return (
    <Body>
      <Container>
        <Header text='Login' onPress={() => handleGoBack()}/>
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
        <ContainerCreateAccount>
          <CreateAccount onPress={() => navigation.navigate('Register')}>Already have an account?</CreateAccount>
          <Icone name='long-arrow-alt-right' />
        </ContainerCreateAccount>
        <Button name='Send' onPress={handleSubmit(onSubmit)} />
      </Container>
    </Body>
  )
}
