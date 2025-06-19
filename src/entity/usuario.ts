import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from "typeorm";
import bcrypt from "bcryptjs";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  usuario_id!: number;
  @Column()
  email!: string;
  @Column()
  senha!: string;

  @BeforeInsert()
  async hashPassword() {
    if (this.senha) {
      this.senha = await bcrypt.hash(this.senha, 10);
    }
  }
}
