import nodemailer from "nodemailer";
import { MessageOption } from "../interface/notification.interface";

export const sendEmail = async (message: MessageOption) => {
  const emailGmail = `${process.env.EMAILGOOGLE}`;
  const passGmail = `${process.env.PASSGOOGLE}`;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: emailGmail,
      pass: passGmail,
    },
  });

  await transporter.sendMail(message);
};
