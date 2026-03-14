

import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Hello World!., -- Version 2 -- Environment:  ${process.env.ENV} `);
});

export default app;