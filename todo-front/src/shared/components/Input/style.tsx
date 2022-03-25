import styled from 'styled-components'

export const InputField = styled.input<{width: string}>`
    width: 100%;
    padding: 10px 20px;
    margin-top: 5px;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: 1px 1px 2px rgba(0,0,0,.1);

`
export const SelectField = styled.select<{width?: string}>`
    width: 100%;
    padding: 10px 20px;
    margin-top: 5px;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: 1px 1px 2px rgba(0,0,0,.1);

`
export const Label = styled.label<{width?: string, margin?: string}>`
    font-size: 16px;
    font-weight: 600;
`

export const InputContainer = styled.div<{width?: string, margin?: string}>`
    padding: 10px;
    width: ${({width}) => width || '100%'};
    min-height: 20px;
    margin: ${({width}) => width || '5px 0px'};
`
export const Error = styled.div<{width?: string, margin?: string}>`
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: red;
    text-align: right ;
`