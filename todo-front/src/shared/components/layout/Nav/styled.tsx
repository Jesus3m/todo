import styled from "styled-components";

export const Navigation = styled.div`
width: 100vw;
height: 60px;
top: 0;
left: 0;
display: flex;
justify-content: space-between;
align-items: center;
background: #fff;
padding-top: 30px;
padding-bottom: 30px;
border-bottom: 3px solid rgba(0,0,0,.2);
`

export const Logo = styled.div`
    margin: 0px 20px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
        width: 100%;
    }
`

export const Options = styled.div`
width: 30%;
display: flex;
justify-content: flex-end;
align-items: center;
margin-right: 20px;
 & button {
     border: none;
     background: transparent;
     cursor: pointer;
 }
`
