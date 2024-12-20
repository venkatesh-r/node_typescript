import express, { Request, Response, Application } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const PORT: number = 5000;

app.listen(PORT, () => console.log(`PORT is running on ${PORT}`));
