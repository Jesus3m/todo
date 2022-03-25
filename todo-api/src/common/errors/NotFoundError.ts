import ResourceError from './ResourceError'
export class NotFound extends ResourceError {
    constructor(message: string){
        super(message, 404)
    }
}