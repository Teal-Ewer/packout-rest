import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
	res.send("Express + TypeScript Server");
});

app.get("/packs", (req, res) => {
	res.send("Packs");
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
