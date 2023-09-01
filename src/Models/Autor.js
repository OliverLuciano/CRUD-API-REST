import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({ 

    Id: {type: String},
    nome: { 
        type: String,
        require: true,
    },
    nascionalidade: {type: String}
},
{
    versionKey: false
});

const autores = mongoose.model("autores", autorSchema);

export default autores;