const port = process.env.PORT || 3000;
import app from "./src/app.js";


app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
