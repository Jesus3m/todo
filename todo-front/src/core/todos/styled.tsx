import Scrollbars from 'react-custom-scrollbars'
import styled from 'styled-components'

export const Card = styled.div`
    width: 45%;
    height: 90%;
    min-height: 60vh;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffff;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 10px;
    box-shadow: 5px 5px 3px rgba(0,0,0,.2);
`

export const TodoForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`


export const ScrollBar = styled(Scrollbars)`
    width: 100%;
    height: 65vh;
`