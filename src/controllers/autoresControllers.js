import  {Autor}   from "../Models/index.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

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
                next(new NaoEncontrado("ID do autor não encontrado!"));
            }
            res.status(200).json(autor);       
        }catch(erro){
            next(erro); 
        }
    };

    //Funcao responsavel por cadastra os Autors no banco (não possuindo grandes filtros devido a regra de negocio)
    static cadastraAutor = async (req, res, next) => {
        try {
            const { nome, nacionalidade} = req.body;
            let autor = new Autor({nome, nacionalidade});
            await autor.save();
            res.status(201).send(autor.toJSON());
        }catch(erro){
            next(erro); 
        }
    };

    //Funcao responsavel por atualizar os dados de um autor no bd usando o ID como localizador
    static updateAutor = async (req, res, next) => {
        try {
            const {id} = req.params;
            const autor = await Autor.findByIdAndUpdate(id,{$set: req.body});
            if(!autor){  
                next(new NaoEncontrado("ID do autor não encontrado!"));
            }
            else{
                res.status(200).send({mensage: "Autor atualizado com sucesso."});
            }
        }catch(erro){
            next(erro); 
        }

    };
    //Funcao responsavel por deletar Autors no banco utilizando o ID
    static deleteAutor = async (req, res, next) => {
        try {
            const {id} = req.params;
            const autor = await Autor.findByIdAndDelete({_id: id});
            if(!autor){  
                next(new NaoEncontrado("ID do autor não encontrado!"));
            }
            else{
                res.status(200).send({mensage: "Autor atualizado com sucesso."});
            }
        }catch(erro){
            next(erro); 
        }
    };
}


export default AutorController;