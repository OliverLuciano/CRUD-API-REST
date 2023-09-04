import Autor from "../Models/Autor.js";

class AutorController {  
//funcao responsavel por retornar uma lista com todos os Autors cadastrados no banco
    static listarAutores = async (req, res, next) => {
        try{
            const autor = await Autor.find();
            res.status(200).json(autor);
        }catch(erro){
            next(erro); 
        }
    };

    //Funcao responsavel por retornar o objeto autor utilizando o ID como parametro
    static listarAutor = async (req, res, next) => {
        try {
            const {id} = req.params;
            const autor = await Autor.findById({_id : id});
            if(!autor) {
                return res.status(404).send({mensage: "Autor não encontrado!"});
            }
            res.status(200).json(autor);       
        }catch(erro){
            next(erro); 
        }
    };

    //Funcao responsavel por cadastra os Autors no banco (não possuindo grandes filtros devido a regra de negocio)
    static cadastraAutor = async (req, res, next) => {
        try {
            let autor = new Autor(req.body);
            autor.save();
            res.status(201).send(autor.toJSON());
        }catch(erro){
            next(erro); 
        }
    };

    //Funcao responsavel por atualizar os dados de um autor no bd usando o ID como localizador
    static updateAutor = async (req, res, next) => {
        try {
            const {id} = req.params;
            await Autor.findByIdAndUpdate(id,{$set: req.body});
            res.status(200).send({mensage: "Autor atualizado com sucesso."});
        }catch(erro){
            next(erro); 
        }

    };
    //Funcao responsavel por deletar Autors no banco utilizando o ID
    static deleteAutor = async (req, res, next) => {
        try {
            const {id} = req.params;
            await Autor.deleteOne({_id: id});
            res.status(200).send({mensage: "Autor deletado com sucesso!"});
        }catch(erro){
            next(erro); 
        }
    };
}


export default AutorController;