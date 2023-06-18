import Express  from "express";
import AutoresControllers from "../controllers/autoresControllers.js"

const router = Express.Router()

router.get("/autor", AutoresControllers.listarAutores)
router.get("/autor/:id", AutoresControllers.listarAutor)
router.post("/autor", AutoresControllers.cadastraAutor)
router.put("/autor/:id", AutoresControllers.updateAutor)
router.delete("/autor/:id", AutoresControllers.deleteAutor)

export default router;