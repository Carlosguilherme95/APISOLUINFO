import { Router } from "express";
import { ClienteController } from "../controller/clientecontroller"


const clienteRouter = Router();
const clienteController = new ClienteController()

clienteRouter.post("/createCliente", clienteController.post.bind(clienteController))



export default clienteRouter