import ResourceError from './ResourceError'
export class Forbidden extends ResourceError {
    constructor(message: string){
        super(message, 403)
    }
}