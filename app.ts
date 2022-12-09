import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { apiPaths } from "./interface/apiPaths.interface";
import { notificationRouter } from "./routers/notification.router";

dotenv.config();
const port = process.env.PORT || 3001;

export const app: Express = express();
const apiParhs: apiPaths = { notification: "/api/notification" };

app.use(express.json());
app.use(cors());

app.use(apiParhs.notification, notificationRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to Notification email API Bloom",
    version: "1.0.0",
  });
});

app.listen(port, () => {
  console.log(`Server initialized on port ${port}`);
});
