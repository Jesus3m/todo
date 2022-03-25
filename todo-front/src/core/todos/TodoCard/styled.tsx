import styled from 'styled-components'

export const Todo = styled.div`
    margin: 10px auto;
    width: 80%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0,0,0,.1);
    padding: 10px;
    border-radius: 8px;
`

export const Options = styled.div`
    & button, & div {
        margin-left: 10px;
    }
`

export const StatusPill = styled.div<{status: string}>`
width: 20px;
height: 20px;
border-radius: 100%;
background: ${({status}) => status === "DONE" ? "green" : "orange"};
cursor: pointer;
`