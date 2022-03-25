import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit'
import { watchSagas } from "./saga";
import sessionSlice from "../session/session.slice";
import todosSlice from "../todos/todos.slice";
import todoSlice from "../todos/todo.slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    session: sessionSlice,
    todos: todosSlice,
    todo: todoSlice
  },
  middleware: (getDefaultMiddleware) =>{
    return getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
  },
})
sagaMiddleware.run(watchSagas);

export default store