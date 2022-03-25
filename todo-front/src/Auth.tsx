import React, { FC, useEffect } from 'react'
import { Layout } from './shared/components/layout';
import { useContext } from 'react';
import { alertContext } from './shared/context/alert.context';
import { clearSession } from './shared/context/session/session.slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateSession } from './shared/context/session/session.saga';
import axios from 'axios';

export const Auth: FC = ({children}) => {
  const {pathname} = useLocation()
  const dispatch = useDispatch()
  const {toggleShowAlert, setMessage} = useContext(alertContext)


  const router = useNavigate()
  const session = useSelector((state: any)=> state.session.session)


  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(/403/.test(error.message) || /401/.test(error.message)){
      toggleShowAlert(true)
      setMessage("Yo don't have permissions")
      dispatch(clearSession(undefined))
    }
    if(/500/.test(error.message)){
      toggleShowAlert(true)
      setMessage("An internal error has occurred")
    }
    if(/400/.test(error.message)){
      toggleShowAlert(true)
      setMessage("Check the fields and send the form again")
    }
    return Promise.reject(error);
  });

  useEffect(()=>{
    if(!session || (!session.id || session.id === null)){
      router("/login")
    }else{
      router("/")
    }
  },[session])

  useEffect(()=>{
    dispatch(validateSession(undefined))
  }, [pathname])
  return (
    <>
    { !["/login", "/register"].includes(pathname) ? <Layout>{children}</Layout> : children}

    </>
  )
}
