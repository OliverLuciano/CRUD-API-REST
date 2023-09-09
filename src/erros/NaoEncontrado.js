import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase{
    constructor(mensage = "Página não encontrada!"){
        super(mensage, 404);
    }
}

export default NaoEncontrado;