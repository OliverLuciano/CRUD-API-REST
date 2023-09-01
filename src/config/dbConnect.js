import mongoose from "mongoose";

//mongoose.connect("mongodb+srv://lolciano:1234@cluster0.ao1l8cx.mongodb.net/");
mongoose.connect(process.env.STRING_CONEXAO_DB );

let db = mongoose.connection;

export default db;