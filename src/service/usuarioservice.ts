import { AppDataSource } from "../data-source/data-source";
import { Usuario } from "../entity/usuario";
import bcrypt from "bcryptjs"


export class UsuarioService{
    private usuarioRepository = AppDataSource.getRepository(Usuario)
    async createUser(email: string, senha:string){
        const newUsuario = new Usuario()
        newUsuario.email = email
        newUsuario.senha = senha
        await this.usuarioRepository.save(newUsuario)
    }
    async login(email: string, senha:string){
        const validateLogin = await this.usuarioRepository.findOne({
            where:{email}
        })
    
        if(!validateLogin){
            throw new Error(`email não cadastrado`)
        }
        const checkSenha = await bcrypt.compare(senha, validateLogin.senha)
        console.error(checkSenha)
        if(!checkSenha){
            throw new Error(`senha incorreta`)
        }
        console.log("login realizado com sucesso.....")
        return validateLogin
        }
    }

    