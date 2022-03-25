import styled from "styled-components";

export const  AlertBox = styled.div<{show?: boolean}>`
    transform: ${({show})=> show ? "translate(0)" : "translate(150%)"} ;
    width: 300px;
    height: 150px;
    background: rgba(255, 255 ,255, .96);
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 99999;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0,0,0,.2);
    box-shadow: 5px 5px 5px rgba(0,0,0,.3);
    transition: all .4s ease-in-out;
`