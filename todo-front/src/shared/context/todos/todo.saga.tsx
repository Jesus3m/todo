import { createAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";

export const GET_TODOS = 'todos/get'
export const CREATE_TODO = 'todos/create'
export const UPDATE_TODO = 'todos/update'
export const DELETE_TODO = 'todos/delete'

export const getTodos = createAction<any>(GET_TODOS)
export const createTodo = createAction<any>(CREATE_TODO)
export const updateTodo = createAction<any>(UPDATE_TODO)
export const deleteTodo = createAction<any>(DELETE_TODO)

export function* fetchTodos(fetchFn: any, success: any, failed: any, { payload }: any): Generator<any, any, any> {
    try {
      const result = yield call(fetchFn, payload)
      yield put(success(result?.data?.data?.Todos?.length > 0 ?result?.data?.data?.Todos : [] ));

    } catch (error: any) {
      yield put(failed(error.message));
    }
  }
