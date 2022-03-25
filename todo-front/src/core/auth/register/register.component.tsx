import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { Button } from '../../../shared/components/Button'
import { Input } from '../../../shared/components/Input'
import { registerUser, validateSession } from '../../../shared/context/session/session.saga'
import { useForm } from '../../../shared/hooks/useForm'
import { CardRegister, RegisterContainer, LogoCard, WrapperRegister } from './register.styles'

export const Register = () => {
  // Router to dynamic navigation
  const dispatch = useDispatch()

  // States to the form
  const {data, handleChange} = useForm({
    name: '',
    lastName: "",
    email: '',
    password: ''
  })
  const handleClick = (e: any) => {
    e.preventDefault()
    dispatch(registerUser(data))

    setTimeout(()=>{
      dispatch(validateSession(undefined))
    },2000)

  }
  return (
    <RegisterContainer>
      <WrapperRegister>
       <LogoCard>
         <img src="/Logo_Color.png" alt="" />
       </LogoCard>
        <CardRegister>
          <Link to='/login'>Go back</Link>
          <Input id='name' label='Your Name' name='name' value={data.name} onChange={handleChange}/>
          <Input id='lastName' label='Your Lastname' name='lastName' value={data.lastName} onChange={handleChange}/>
          <Input id='email' label='Your Email' type='email' name='email' value={data.email} onChange={handleChange}/>
          <Input id='password' label='Password' name='password' type='password' value={data.password} onChange={handleChange}/>
          <Input label='Repeat Password' name='repeatPassword' type='password' value={data.password} onChange={handleChange}/>
          <Button onClick={handleClick}>Register</Button>
        </CardRegister>
      </WrapperRegister>
    </RegisterContainer>
  )
}
