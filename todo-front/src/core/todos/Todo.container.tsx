import { Card } from './styled'
import { TodoCreate } from './TodoCreate'
import { TodosList } from './TodosList'
import { Scrollbars } from 'react-custom-scrollbars';

export const Todos = () => {
  return (
    <div style={{display: 'flex', width: '100%', justifyContent: "space-around", alignItems: "center"}}>
    <Card>
      <h1 style={{width: '80%', textAlign: "left", margin: 'auto'}}>TODOS</h1>
      <Scrollbars style={{width: '100%', height: '65vh'}}>
        <TodosList />
      </Scrollbars>
    </Card>
    <Card>
    <Scrollbars style={{width: '100%', height: '65vh'}}>
      <TodoCreate/>
    </Scrollbars>
    </Card>
  </div>
  )
}
