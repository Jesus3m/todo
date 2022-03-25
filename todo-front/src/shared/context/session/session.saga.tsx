import { createAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";

export const VALIDATE_SESSION = 'session/validate'
export const LOGIN_USER = 'session/login'
export const REGISTER_USER = 'session/register'
export const LOGOUT = 'session/logout'

export const validateSession = createAction<any>(VALIDATE_SESSION)
export const loginUser = createAction<any>(LOGIN_USER)
export const registerUser = createAction<any>(REGISTER_USER)
export const logoutUser = createAction<any>(LOGOUT)

export function* fetchLogin(fetchFn: any, success: any, failed: any, { payload }: any): Generator<any, any, any> {
    try {
      const result = yield call(fetchFn, payload)
      yield put(success(result.data.userId ? result.data : { user: null, id: null}));
  
    } catch (error: any) {
      yield put(failed(error.message));
    }
  }
  export function* fetchRegister(fetchFn: any, success: any, failed: any, { payload }: any): Generator<any, any, any> {
    try {
      const result = yield call(fetchFn, payload)
      yield put(success(result.data.data));
  
    } catch (error: any) {
      yield put(failed(error.message));
    }
  }
  export function* fetchLogout(fetchFn: any, success: any, failed: any, { payload }: any): Generator<any, any, any> {
    try {
      const result = yield call(fetchFn, payload)
      yield put(result.data.success && success({data: null, userId: { id: null}}));
  
    } catch (error: any) {
      yield put(failed(error.message));
    }
  }