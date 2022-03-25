import {genSaltSync, hashSync, compareSync} from 'bcrypt'
export const encryptPassword = (password: string) =>{
    const salt = genSaltSync(10)
    return hashSync(password, salt)
}

export const comparePasswords = (password: string, hash: string) =>{
    return compareSync(password, hash)
}