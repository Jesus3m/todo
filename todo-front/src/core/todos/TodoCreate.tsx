import moment from 'moment'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../shared/components/Button'
import { Input } from '../../shared/components/Input'
import { selectOneTodo } from '../../shared/context/todos/todo.slice'
import { createTodo, updateTodo } from '../../shared/context/todos/todo.saga'
import { useForm } from '../../shared/hooks/useForm'
import { TodoForm } from './styled'

export const TodoCreate: FC = () => {
  const dispatch = useDispatch()
  const selectTodo = (todo: any) =>  dispatch(selectOneTodo(todo))

  const todo = useSelector((state: any) => state.todo)

  const { data, handleChange, forceData} = useForm({
    id: null,
    description: "",
    status: "PENDING",
    completeAt: moment().format("YYYY-MM-DD"),
  })

  const clean = () => {
    selectTodo(undefined)
    forceData({
      id: null,
      description: "",
      status: "PENDING",
      completeAt: moment().format("YYYY-MM-DD"),
    })
  }

  const handleCancel = (e: any) =>{
    e.preventDefault()
    clean()
  }

  const handleSave = (e: any) =>{
    e.preventDefault()
    if(data.id === null && data.description !== "") {
      dispatch(createTodo(data))
      clean()
    } else if(data.id !== null) {
      data.description !== "" && data.id && dispatch(updateTodo(data))
      clean()
    }
  }

  useEffect(()=>{
    if(todo && todo.id) forceData({...todo, completeAt: moment(todo.completeAt).add(1, 'days').format("yyyy-MM-DD")})
  }, [todo])

  return (
    <TodoForm>
      <h2>{todo && todo.id ? "Update Todo": "Create Todo"}</h2>
      <Input id='description' label='Description' name='description' value={data.description} onChange={handleChange}/>
      <Input id='status' label='status' name='status' type='select' value={data.status} onChange={handleChange} options={[{value: "DONE", name: "Completada"}, {value: "PENDING", name: "Pendiente"}]} />
      <Input id='date' label='Date To Complete task' name='completeAt' type='date' value={data.completeAt} onChange={handleChange}/>
      <Button id='accept' onClick={handleSave}>{todo && todo.id ? "Update": "Create"}</Button>
      <Button id='cancel' onClick={handleCancel}>Cancel</Button>
  </TodoForm>
  )
}
