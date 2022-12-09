import { Router } from "express";
import { notificationEmail } from "../controllers/notification.controllers";

export const notificationRouter = Router();

notificationRouter.post("/", notificationEmail);
