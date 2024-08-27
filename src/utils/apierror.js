class ApiError extends Error{
    constructor(
      statusCode,
      message="something went wrong",
      errors=[],
      statcks=""

    ){
        super(message)
        this.statusCode=statusCode
        this.data=null,
        this.message=message
        this.success=false
        this.errors=errors
    
    if(stack){
        this.stack=statcks
    }
    else{
        Error.captureStackTrace(this,this.constructor)
    }
}
}
export{Apierror}