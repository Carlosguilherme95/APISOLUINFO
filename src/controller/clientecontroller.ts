import { ClienteService } from "../service/clienteservice";
import { Request, Response } from "express";
import { CreateClienteDTO } from "../dto/clientDto";

export class ClienteController {
  private clienteService = new ClienteService();

  async post(req: Request, res: Response) {
    const data: CreateClienteDTO = req.body;
     console.log("Recebido no corpo da requisição:", req.body)
    try {
      const createClient = await this.clienteService.createCliente(data);
      res.status(201).json(createClient);
    } catch (e) {
      console.error(e);
      res.status(400).send(`não foi possível criar o cliente`);
    }
  }
  async getAll(req: Request, res: Response) {
    const getCliente = await this.clienteService.getAll();
    if (!getCliente) {
      throw new Error("não foi possível buscar os cliente cadastrados");
    }
    res.status(200).json(getCliente);
  }
  async getOne(req: Request, res: Response) {
    const { nomeFantasia } = req.query;

    try {
      const findOne = await this.clienteService.getOne(nomeFantasia as string);
      console.log(findOne)
      res.status(200).json(findOne);
    } catch (e) {
      console.error(e);
      res.status(404).send("cliente não encontrado");
    }
  }
}
