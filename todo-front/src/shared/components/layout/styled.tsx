import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #f0f0f0;
`
export const Content = styled.div`
width: 100vw;
height: calc(100vh - 60px);
top: 60px;
left: 0;
justify-content: center;
align-items: center;
background: #f0f0f0;
padding-top: 30px;
padding-bottom: 30px;
`
