import React from 'react'
import { View, TextInput, TextTopInput, ContainerIcon, Close, Check } from './styles'
import { Controller } from 'react-hook-form'

export function Input({ name, nameTop, errors, inputRef, control, onSubmitEditing, keyboardType }) {
  const [click, setClick] = React.useState(nameTop)
  return (
    <View>
      <TextTopInput>{click === null && nameTop}</TextTopInput>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { isDirty } }) => {
          // console.log(isDirty)
          return (
            <>
              <TextInput
                onChangeText={onChange}
                value={value}
                ref={inputRef}
                onSubmitEditing={onSubmitEditing}
                keyboardType={keyboardType}
                error={!!errors[name]?.message}
                placeholder={click}
                placeholderTextColor='#252525'
                onFocus={() => setClick(null)}
                onBlur={() => value === '' && setClick(nameTop)}
              // onChange={console.log(value)}
              />
              {errors[name] && <ContainerIcon><Close name='close' /></ContainerIcon>}
              {(!errors[name]?.message && isDirty) && <ContainerIcon><Check name='check' /></ContainerIcon>}
            </>
          )
        }}
      />
    </View>
  )
}
