import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectOneTodo } from '../../shared/context/todos/todo.slice'
import { getTodos } from '../../shared/context/todos/todo.saga'
import { TodoCard } from './TodoCard'

export const TodosList: FC = () => {
   const dispatch = useDispatch()
   const selectTodo = (todo: any) =>  dispatch(selectOneTodo(todo))

   const todos = useSelector((state: any) => state.todos)

   useEffect(()=>{
       dispatch(getTodos(undefined))
   }, [])
  return (
    <div id='todo-list'>
      {
        todos.length > 0 && todos?.map((todo: any, i: any) => {
          return <TodoCard i={i} onSelect={selectTodo} todo={todo} key={i}/>
        })
      }
    </div>
  )
}
