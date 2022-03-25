import {nanoid} from 'nanoid'
export const createId = (size= 30, prefix?: string) =>{
    return prefix ? `${prefix}_${nanoid(size)}` : nanoid(size)
}