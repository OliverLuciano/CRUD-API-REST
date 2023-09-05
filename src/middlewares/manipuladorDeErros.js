import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(error, req, res, next) {
    if(error instanceof mongoose.Error.CastError){
        res.status(400).send({message:"Um ou mais dados fornecidos estão incorretos!"});
    }
    else if (error instanceof mongoose.Error.ValidationError){
        const messagemErro = Object.values(error.errors).map(error => error.message).join("; ");
        res.status(400).send({message: `Os seguintes erros foram encontrados: ${messagemErro}`});
    }
    else{
        res.status(500).send({message:"Erro interno no servidor"});
    }
}

export default manipuladorDeErros;
