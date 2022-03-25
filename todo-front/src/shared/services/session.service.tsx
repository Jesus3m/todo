import axios from 'axios'
const BASE_URL = /* process.env.REACT_APP_BASE_URL + */ "/api/v1"
export const login = async (userData: any) =>{
    const data = await axios.post(`${BASE_URL}/auth/login`, userData)
    return data
}

export const getMeSession = async () =>{
    const data = await axios.get(`${BASE_URL}/auth/me`)
    return data
}

export const register = async (user: any) =>{
    const data = await axios.post(`${BASE_URL}/auth/register`, user)
    return data
}


export const logout = async () =>{
    const data = await axios.get(`${BASE_URL}/auth/logout`)
    return data
}