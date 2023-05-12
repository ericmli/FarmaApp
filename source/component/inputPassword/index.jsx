import React from 'react'
import { View, TextInput, TextTopInput, ContainerIcon, Close } from './styles'
import { Controller } from 'react-hook-form'

export function Password({ name, nameTop, errors, inputRef, control, onSubmitEditing }) {
  const [click, setClick] = React.useState(nameTop)

  return (
    <View>
      <TextTopInput>{ click === null && nameTop}</TextTopInput>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
            secureTextEntry={true}
            error={!!errors[name]?.message}
            placeholder={click}
            placeholderTextColor='#252525'
            onFocus={() => setClick(null)}
            onBlur={() => value === '' && setClick(nameTop)}
            />
        )}
      />
      {errors[name] && <ContainerIcon><Close name='close' /></ContainerIcon>}

    </View>
  )
}
