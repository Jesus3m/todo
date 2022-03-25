import { Login } from './core/auth/login/login.component';
import {Routes, Route} from 'react-router-dom'
import { Todos } from './core/todos/Todo.container';
import { Register } from './core/auth/register/register.component';
import axios from 'axios';

axios.interceptors.request.use((config)=>{
  config.withCredentials = true
  return config
}, (err) => {
  return Promise.reject(err)
})
function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Todos/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
