import React, { FC } from 'react'
import { Error, InputContainer, InputField, Label, SelectField } from './style'

type InputType = {
    type?: string
    value?: any,
    label?: string,
    margin?: string,
    name?: string,
    error?: string
    placeholder?: string,
    onChange?: (e: any) => void,
    options?: any[],
    id?: string
}

export const Input: FC<InputType> = ({
    type = 'text',
    placeholder,
    value,
    label,
    margin,
    name,
    error,
    options = [],
    onChange,
    id
}) => {
  return (
    <InputContainer margin={margin}>
       {label && <Label>{label}</Label>}
       {
         ["text", 'password', 'email', 'date'].includes(type) ?
          <InputField id={id} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} width={'60%'} />
         : ['select'].includes(type) ?
          <SelectField id={id} name={name} value={value} onChange={onChange}>
            {
              options.map((opt, i) => {
                return <option key={i} value={opt.value}>{opt.name}</option>
              })
            }
          </SelectField>
         : <input id={id} type="text" />
       }
       { error &&  <Error>{error}</Error>}

    </InputContainer>
  )
}
