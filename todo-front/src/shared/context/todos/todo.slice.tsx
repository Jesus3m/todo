import {createSlice} from '@reduxjs/toolkit'

const OneTodoSlice = createSlice({
    name: "todo",
    initialState: {},
    reducers: {
        selectOneTodo: (state: any, action) =>{
            return state = action.payload
        },
    }
})

export const { selectOneTodo } = OneTodoSlice.actions
export default OneTodoSlice.reducer