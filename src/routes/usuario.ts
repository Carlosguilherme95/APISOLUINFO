import { Router } from "express";
import { UsuarioController } from "../controller/usuarioController";


const usuarioRouter = Router();
const usuarioController = new UsuarioController()
usuarioRouter.post("/createUsuario", usuarioController.post.bind(usuarioController))
usuarioRouter.post("/loginUsuario", usuarioController.userLogin.bind(usuarioController))
export default usuarioRouter