import "reflect-metadata";
import { AppDataSource } from "./data-source/data-source";
import express from "express"
import clienteRouter from "./routes/cliente";
import cors from 'cors';
import usuarioRouter from "./routes/usuario";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/cliente",clienteRouter)
app.use("/usuario",usuarioRouter)


AppDataSource.initialize().then(() => {
  console.log("Conectado ao banco de dados!");

  app.get('/', (req, res) => {
    res.send('API está funcionando!');
  });

}).catch((error) => console.log(error));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });