import { confirmEmailHtml } from "../resource/htmlConfirmEmail";
import { emailVerificateHtml } from "../resource/htmlEmailVerificate";

export const maipOption = (type: string, email: string, code: string) => {
  let mailOptions = {
    from: '"Bloom Api 💄"<elmaik3121@gmail.com>',
    subject: "",
    html: "",
    to: `${email}`,
  };
  switch (type) {
    case "verificate":
      Object.assign(mailOptions, {
        subject: "Verify your account ✔",
        html: confirmEmailHtml(email, code),
      });
      return mailOptions;
    case "verificateConfirmed":
      Object.assign(mailOptions, {
        subject: "Verified account ✔",
        html: emailVerificateHtml(),
      });
      return mailOptions;
    default:
      return mailOptions;
  }
};
