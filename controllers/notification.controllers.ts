import { Request, Response } from "express";
import { maipOption } from "../helpers/mailOption.helpers";
import { sendEmail } from "../services/notification.service";

export const notificationEmail = async (req: Request, res: Response) => {
  const { email, code, type } = req.body;
  const message = maipOption(type, email, code);
  await sendEmail(message);

  res.status(200).json({ message: "The mail has been sent successfully" });
};
