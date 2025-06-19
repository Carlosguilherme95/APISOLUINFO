import { AppDataSource } from "../data-source/data-source";
import { Cliente } from "../entity/cliente";
import { CreateClienteDTO } from "../dto/clientDto";
import { ILike } from "typeorm";
export class ClienteService {
  private clientRepository = AppDataSource.getRepository(Cliente);

  async getAll() {
    const findAll = await this.clientRepository.find();
    if (!findAll) {
      throw new Error(`erro ao buscar cadastros`);
    }
    console.log(findAll)
    return findAll;
  }

  async getOne(nomeFantasia?: string ) {
    if(!nomeFantasia){
      return null
    }
    const result = await this.clientRepository.find({
      where: {nomeFantasia: ILike(`%${nomeFantasia}%`)}
    })
    return result
  }


  async createCliente(data: CreateClienteDTO) {
    const checkCnpj = await this.clientRepository.findOne({
      where: {
        cnpj: data.cnpj,
      },
    });
    if (checkCnpj) {
      throw new Error(`O CNPJ JÁ ESTÁ CADASTRADO NA BASE DE DADOS`);
    }

    const newCliente = this.clientRepository.create(data);

    try {
      await this.clientRepository.save(newCliente);
      return newCliente;
    } catch (e) {
      console.error(e);
      throw new Error(
        `não foi possível salvar o cliente na base de dados ${e}`
      );
    }
  }
}
