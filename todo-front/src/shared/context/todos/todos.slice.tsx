import {createSlice} from '@reduxjs/toolkit'

const TodoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        setTodos: (state: any[], action) =>{
            return state = action.payload
        },
    }
})

export const {setTodos } = TodoSlice.actions
export default TodoSlice.reducer