export default class ResourceError extends Error {
    statusCode: number
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode
      Error.captureStackTrace(this, this.constructor);
    }
    getStatusCode(){
        return this.statusCode
    }
  }