import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: String},
    titulo: {
        type: String,
        required: [true, "O titulo do livro é obrigatório."]
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "autores",
        required: [true, "O autor é obrigatório!"]
    },
    editora: {
        type: String,
        required: [true, "A editora é obrigatório."]
    },
    numeroPaginas: {
        type: Number,
        min: [10, "O número minimo de páginas deve ser 10"],
        max: [ 5000, "O livro não pode possuir mais que 5000 páginas."]
    }
});

const livros = mongoose.model("livros", livroSchema);

export default livros;