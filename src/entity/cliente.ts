import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    cliente_id!: number
    @Column()
    cnpj!: string;
    @Column()
    razaoSocial!: string;
    @Column()
    nomeFantasia!: string;
    // Endereço
    @Column()
    logradouro!: string;
    @Column()
    numero!: string;
    @Column()
    complemento!: string;
    @Column()
    bairro!: string;
    @Column()
    municipio!: string;
    @Column()
    uf!: string;
    @Column()
    cep!: string;

    // Contato
    @Column()
    telefone1!: string;

    @Column({nullable:false})
    email!: string;
}