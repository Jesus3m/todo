import {createSlice} from '@reduxjs/toolkit'

const SessionSlice = createSlice({
    name: "session",
    initialState: {
        session: {
            id: null,
            user: null
        },
        error: null
    },
    reducers: {
        setSession: (state, action) =>{
            state.session = action.payload.userId
            state.session.user = {...action.payload.data, password: undefined}
        },
        setUser(state, action){
            state.session.user = {...action.payload, password: undefined}
            state.session.id = action.payload.id
        },
        setError(state, {payload}){
            state.error = payload
        },
        clearSession(state, payload){
            return state = {
                session: {
                    id: null,
                    user: null
                },
                error: null
            }
        }
    }
})

export const {setSession, setUser, setError, clearSession } = SessionSlice.actions
export default SessionSlice.reducer