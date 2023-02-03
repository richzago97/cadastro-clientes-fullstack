import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import clientsRouter from "./routes/clients.routes";
import contactsRouter from "./routes/contacts.routes";
import clientSessionRouter from "./routes/session.routes";

const app: Application = express();
app.use(express.json());
let cors = require("cors");

app.use(cors());
app.use("/login", clientSessionRouter);
app.use("/clients", clientsRouter);
app.use("/contacts", contactsRouter);

app.use(handleErrorMiddleware);

export default app;
