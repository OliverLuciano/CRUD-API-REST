import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(error, req, res, next) {
    if(error instanceof mongoose.Error.CastError){
        new RequisicaoIncorreta().enviarResposta(res);
    }
    else if(error instanceof mongoose.Error.ValidationError){
        new RequisicaoIncorreta(error).enviarResposta(res);
    }else if( error instanceof NaoEncontrado){
        error.enviarResposta(res);
    }
    else{
        new ErroBase().enviarResposta(res);
    }
}

export default manipuladorDeErros;
