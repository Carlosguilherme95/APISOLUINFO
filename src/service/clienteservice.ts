
import { AppDataSource } from "../data-source/data-source"
import { Cliente } from "../entity/cliente"
import { CreateClienteDTO } from "../dto/clientDto"
export class ClienteService{
    private clientRepository = AppDataSource.getRepository(Cliente)

   async createCliente(data: CreateClienteDTO){
                    
                    const checkCnpj = await this.clientRepository.findOne({where: {
                        cnpj:data.cnpj
                    }})
                    if(checkCnpj){
                        throw new Error(`O CNPJ JÁ ESTÁ CADASTRADO NA BASE DE DADOS`)
                    }

                    const newCliente = this.clientRepository.create(data)
                    

                    try{
                      await  this.clientRepository.save(newCliente)
                      return newCliente
                    }catch(e){
                        console.error(e)
                        throw new Error(`não foi possível salvar o cliente na base de dados ${e}`)
                    }
                }
}

