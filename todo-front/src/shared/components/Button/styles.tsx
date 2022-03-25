import styled from 'styled-components'

export const Btn = styled.button<{width?: string, color?: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: ${({width}) => width || '80%'};
    padding: 10px 30px;
    margin-top: 5px;
    border-radius: 5px;
    border: none;
    outline: none;
    background: ${({color}) => color === 'danger' ? 'red' : '#07d1ae'} ;
    color: white;
    cursor: pointer;
    box-shadow: 1px 1px 2px rgba(0,0,0,.1);

`
