import { useState } from "react"

export const useForm = (init: any) => {
    const [data, setData] = useState<any>(init)

    const changeData = (newData: any) => {
        setData((prev: any) => ({...prev, ...newData}))
    }

    const forceData = (newData: any) => {
        setData(newData)

    }

    const handleChange = (e: any) => {
        setData((prev: any) => ({...prev, [e.target.name]: e.target.value}))
    }
    return { data, changeData, forceData, handleChange }
}