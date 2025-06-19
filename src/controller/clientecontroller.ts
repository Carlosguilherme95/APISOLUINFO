import { ClienteService } from "../service/clienteservice";
import { Request, Response } from "express";
import { CreateClienteDTO } from "../dto/clientDto";

export class ClienteController{
    private clienteService = new ClienteService

    async post(req:Request, res:Response){
        const data: CreateClienteDTO = req.body

        try{
            const createClient = await this.clienteService.createCliente(data)
            res.status(201).json(createClient)
        }catch(e){
            console.error(e)
            res.status(400).send(`não foi possível criar o cliente`)
        }
    }
}