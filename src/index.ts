import "reflect-metadata";
import { AppDataSource } from "./data-source/data-source";
import express from "express"

const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
  console.log("Conectado ao banco de dados!");

  app.get('/', (req, res) => {
    res.send('API está funcionando!');
  });

  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch((error) => console.log(error));
