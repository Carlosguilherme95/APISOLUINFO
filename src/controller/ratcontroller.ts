import { Request, Response } from "express";
import { RatService } from "../service/ratservice";

export class RatController {
  private ratService = new RatService();

  async getCnpjAndRazao(req: Request, res: Response) {
    const { razaoSocial, cnpj } = req.query;

    try {
      const findCnpjRazao = await this.ratService.getCliente(
        razaoSocial as string,
        cnpj as string
      );
      if(!findCnpjRazao){
        res.status(400).send("cliente não encontrado na base de dados")
      }
      res.status(200).json(findCnpjRazao)
    } catch (e) {
        console.error(e)
        res.status(500).send("erro inesperado")
    }
  }
}
