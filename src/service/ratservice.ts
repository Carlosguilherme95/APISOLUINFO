import { ILike } from "typeorm";
import { AppDataSource } from "../data-source/data-source";
import { Cliente } from "../entity/cliente";
import { Rat } from "../entity/rat";

export class RatService {
  private ratRepository = AppDataSource.getRepository(Rat);
  private clienteRepository = AppDataSource.getRepository(Cliente);

  async getCliente(razaoSocial?: string) {
    const findCliente = await this.clienteRepository.find({
      where: [
        {
          razaoSocial: ILike(`%${razaoSocial}%`),
        },
      ],
    });
    if (!findCliente) {
      console.error;
      throw new Error("cliente não foi encontrado");
    }
    return findCliente;
  }
}
