import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../../context/session/session.saga'
import { Logo, Navigation, Options } from './styled'

export const Nav = () => {
  const user = useSelector((state: any) => state.session.session.user)

  const dispatch = useDispatch()
  return (
    <Navigation>
        <Logo>
            <img src="/Logo_Color.png" alt="" />
        </Logo>
        <Options>
          <span> {user?.name} {user?.lastName} &nbsp;</span>
          <button id='logout' style={{width: '20px'}} onClick={()=> dispatch(logoutUser(undefined))}> <img style={{width: '100%'}} src="/logout.png" alt="" /> </button>
        </Options>
    </Navigation>
  )
}
