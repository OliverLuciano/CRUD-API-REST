import Express  from "express";
import LivroController from "../controllers/livrosControllers.js";


const router = Express.Router()

router.get("/livros", LivroController.listarLivros)
router.get("/livros/:id", LivroController.listarLivro)
router.post("/livros", LivroController.cadastraLivro)
router.put("/livros/:id", LivroController.updateLivro)
router.delete("/livros/:id", LivroController.deleteLivro)


export default router;