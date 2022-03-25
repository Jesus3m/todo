import styled from 'styled-components'

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f0f0;
    padding-top: 30px;
    padding-bottom: 30px;
`

export const WrapperLogin = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 60%;
    height: 60%;
    background: white;
    overflow: hidden;
    border-radius: 10px;
    @media screen and (max-width: 600px) {
        & div{
            width: 100%;
        }
        flex-direction: row;
        flex-wrap: wrap;
    }

    & img {
        width: 80%;
    }
    box-shadow: 10px 20px 10px rgba(0,0,0,.1);
`
export const LogoCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
`
export const CardLogin = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    background: #f7f6f3;
    border-radius: 8px;
`

