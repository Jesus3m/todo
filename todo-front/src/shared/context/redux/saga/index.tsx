import { call, put, takeEvery } from "redux-saga/effects";
import { getMeSession, login, logout, register } from "../../../services/session.service";
import { getAllTodos, createTodo, updateTodo, deleteTodo } from "../../../services/todo.service";
import { fetchLogin, fetchLogout, fetchRegister, LOGIN_USER, LOGOUT, REGISTER_USER, VALIDATE_SESSION } from "../../session/session.saga";
import { setError, setSession, setUser } from "../../session/session.slice";
import { CREATE_TODO, DELETE_TODO, fetchTodos, getTodos, GET_TODOS, UPDATE_TODO } from "../../todos/todo.saga";
import { setTodos } from "../../todos/todos.slice";

export function* fetch(fetchFn: any, success: any, failed: any, { payload }: any): Generator<any, any, any> {
  try {
    const result = yield call(fetchFn, payload)
    if(result.data){
      yield put(success(result.data.results ? result.data.results : result.data));
    }
    return

  } catch (error: any) {
    yield put(failed(error.message));
  }
}

export function* watchSagas() {
  // Session
    yield takeEvery(VALIDATE_SESSION, fetchLogin, getMeSession, setSession, setError)
    yield takeEvery(LOGIN_USER, fetchLogin, login, setSession, setError)
    yield takeEvery(REGISTER_USER, fetchRegister, register, setUser, setError)
    yield takeEvery(LOGOUT, fetchLogout, logout, setSession, setError)

    // Todos
    yield takeEvery(GET_TODOS, fetchTodos, getAllTodos, setTodos, setTodos)
    yield takeEvery(CREATE_TODO, fetch, createTodo, getTodos, (arg: any) => null)
    yield takeEvery(UPDATE_TODO, fetch, updateTodo, getTodos, (arg: any) => null)
    yield takeEvery(DELETE_TODO, fetch, deleteTodo, getTodos, (arg: any) => null)

  }