import axios from 'axios'
const BASE_URL =/*  process.env.REACT_APP_BASE_URL +  */"/api/v1"
export const getAllTodos = async (id: string) =>{
    const data = await axios.get(`${BASE_URL}/user/todo`)
    return data
}

export const createTodo = async (todo: any) =>{
    const data = await axios.post(`${BASE_URL}/todo/`, todo)
    return data
}

export const updateTodo = async (todo: any) =>{
    const data = await axios.put(`${BASE_URL}/todo/${todo.id}`, todo)
    return data
}


export const deleteTodo = async (id: string) =>{
    const data = await axios.delete(`${BASE_URL}/todo/${id}`)
    return data
}