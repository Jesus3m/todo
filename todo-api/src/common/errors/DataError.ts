import ResourceError from './ResourceError'
export class DataError extends ResourceError {
    constructor(message: string){
        super(message, 400)
    }
}