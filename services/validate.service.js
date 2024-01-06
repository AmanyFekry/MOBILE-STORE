const validate = (schema) =>
{
    return(req,res,next)=>{
        // console.log(req.body);
        // res.send()
        const { error } = schema.validate(req.body, { abortEarly: false });
        console.log(error)

        if (error)
        {
            let errMsg = error.details.map((ele) =>
            {
                
                return {message:err.message,path:err.path}

            })
            
            res.status(400).send({errMsg})
        }
        next()
    }
}

module.exports= validate