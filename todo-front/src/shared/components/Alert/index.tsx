import React, { FC } from 'react'
import { AlertBox } from './styled'

export const Alert: FC<any> = ({toggleShowAlert, show, children}) => {
  return (
    <AlertBox onClick={() => toggleShowAlert(false)} show={show}>{children}</AlertBox>
  )
}
