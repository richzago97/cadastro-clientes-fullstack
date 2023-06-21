import { DataSource } from "typeorm";
import "dotenv/config";
export const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_DB_PORT!),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB_NAME,
        logging: true,
        synchronize: false,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      }
);
