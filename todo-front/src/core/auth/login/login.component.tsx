import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate, Link} from 'react-router-dom'
import { Button } from '../../../shared/components/Button'
import { Input } from '../../../shared/components/Input'
import { loginUser } from '../../../shared/context/session/session.saga'
import { useForm } from '../../../shared/hooks/useForm'
import { CardLogin, LoginContainer, LogoCard, WrapperLogin } from './login.styles'

export const Login = () => {
  const session = useSelector((state: any) => state.session.session)
  const dispatch = useDispatch()
  // Router to dynamic navigation
  const router = useNavigate()

  // States to the form
  const {data, handleChange} = useForm({
    email: '',
    password: ''
  })

  const handleClick = (e: any) => {
    e.preventDefault()
    dispatch(loginUser(data))

  }
  useEffect(()=>{
    if(session && session.id !== null){
      router("/")
    }
  }, [session])
  return (
    <LoginContainer>
      <WrapperLogin>
       <LogoCard>
         <img src="/Logo_Color.png" alt="" />
       </LogoCard>
        <CardLogin>
          <Input id='email' label='Your Email' name='email' type='email' value={data.email} onChange={handleChange}/>
          <Input id='password' label='Password' name='password' type='password' value={data.password} onChange={handleChange}/>
          <span>Don't have account? <Link to="/register">Register now</Link></span>
          <Button onClick={handleClick}>Sign In</Button>
        </CardLogin>
      </WrapperLogin>
    </LoginContainer>
  )
}
