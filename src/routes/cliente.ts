import { Router } from "express";
import { ClienteController } from "../controller/clientecontroller"


const clienteRouter = Router();
const clienteController = new ClienteController()

clienteRouter.post("/createCliente", clienteController.post.bind(clienteController))
clienteRouter.get("/findCliente", clienteController.getAll.bind(clienteController))
clienteRouter.get("/findOneCliente", clienteController.getOne.bind(clienteController))

export default clienteRouter