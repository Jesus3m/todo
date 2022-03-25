import React, { FC } from 'react'
import { Btn } from './styles'

type ButtonProps = {
    width?: string
    onClick?: (e: any) => void,
    color?: string,
    id?: string
}

export const Button: FC<ButtonProps> = ({
    children,
    width,
    onClick,
    color,
    id
}) => {
  return (
    <Btn id={id} color={color} onClick={onClick} width={width}>{children}</Btn>
  )
}
