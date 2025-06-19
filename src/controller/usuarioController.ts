import { ClienteService } from "../service/clienteservice";
import { Request, Response } from "express";
import { UsuarioService } from "../service/usuarioservice";

export class UsuarioController{
    private usuarioService = new UsuarioService()

    async post(req:Request, res:Response){
        const {email, senha} = req.body

        const createUsuario = this.usuarioService.createUser(email,senha)
        res.status(201).send("usuário criado com sucesso")
    }
    async userLogin(req:Request, res:Response){
        const {email, senha} = req.body

        try{
            const loginValidate = await this.usuarioService.login(email, senha)
            if(!loginValidate){
                throw new Error("não foi possível fazer login")
            }
            res.status(200).json(loginValidate)
        }catch(e){
            res.status(400).send(`erro de login`)
        }
    }
}