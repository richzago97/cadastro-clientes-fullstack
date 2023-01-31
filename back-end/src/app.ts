import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import clientsRouter from "./routes/clients.routes";

const app: Application = express();
app.use(express.json());

app.use("/clients", clientsRouter);

app.use(handleErrorMiddleware);

export default app;
