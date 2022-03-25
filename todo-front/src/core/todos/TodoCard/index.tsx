import moment from 'moment'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../../../shared/components/Button'
import { deleteTodo, updateTodo } from '../../../shared/context/todos/todo.saga'
import { Options, StatusPill, Todo } from './styled'

export const TodoCard: FC<{todo: any, onSelect: any, i: number}> = ({todo, onSelect, i}) => {

  const [rest, setRest] = useState(moment(todo.completeAt).diff(moment(), 'days'))
  const dispatch = useDispatch()

  const handleChangeState = () => {
     dispatch(updateTodo({...todo, status: todo.status === "DONE" ? "PENDING" : "DONE"}))

  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  useEffect(()=>{
    const interval = setInterval(() => {
      setRest(moment(todo.completeAt).diff(moment(), 'days'))
    }, 1000 )

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <Todo id={`todo-${i}`}>
      <span>{todo.description}: {rest > 0 ? `${rest} days` : 0 + " days"} </span>
      <Options style={{display: "flex", width: "50%", alignItems: 'center', justifyContent: "flex-end"}}>
        <Button id={`edit-${i}`} onClick={()=> onSelect(todo)} width="20%">Edit</Button>
        <Button id={`delete-${i}`} color='danger' onClick={handleDelete} width="20%">Delete</Button>
        <StatusPill onClick={handleChangeState} status={ todo.status }></StatusPill>
      </Options>
    </Todo>
  )
}
