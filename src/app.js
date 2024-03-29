import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

db.on("error", console.log.bind(console, "error de conexao"));
db.once("open", () => {
    console.log("Conexao foi um sucesso!");
});

const app = express();

app.use(express.json());
routes(app);
app.use(manipulador404);
app.use(manipuladorDeErros);

export default app;