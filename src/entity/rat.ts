import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Cliente } from "./cliente"; 

@Entity()
export class Rat {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Cliente, { eager: true })
  cliente!: Cliente;

  @Column()
  tecnico!: string;

  @Column()
  gerente!: string;

  @Column({ type: 'date' })
  dataAtendimento!: string;

  @Column()
  descricao!: string;

  @Column({ type: 'bytea' }) // para PostgreSQL. Use 'blob' se for MySQL.
  pdfAssinado!: Buffer;

  @CreateDateColumn()
  criadoEm!: Date;
}
