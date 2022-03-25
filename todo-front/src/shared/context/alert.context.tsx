import { createContext, FC, useState } from "react";
import { Alert } from "../components/Alert";

export const alertContext = createContext<any>(null)

export const AlertProvider: FC = ({children}) => {
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState()

    const toggleShowAlert = (status: boolean = true) =>{
        setShow(status)
    }
    const value = {toggleShowAlert, setMessage }
    return(
        <>
        <alertContext.Provider value={value}>
        <Alert toggleShowAlert={toggleShowAlert} show={show}> {message} </Alert>
            {children}
        </alertContext.Provider>
        </>
    )
}