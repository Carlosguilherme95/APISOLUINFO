import { DataSource } from "typeorm"; 
import { Cliente } from "../entity/cliente";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "170.238.45.147",
  port: 5432,
  username: "api",
  password: "13915995",
  database: "apibackend",
  synchronize: true,
  logging: false,
  entities: [Cliente],
  migrations: [],
  subscribers: [],
});