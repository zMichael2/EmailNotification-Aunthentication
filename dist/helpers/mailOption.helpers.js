"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maipOption = void 0;
const htmlConfirmEmail_1 = require("../resource/htmlConfirmEmail");
const htmlEmailVerificate_1 = require("../resource/htmlEmailVerificate");
const maipOption = (type, email, code) => {
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
                html: (0, htmlConfirmEmail_1.confirmEmailHtml)(email, code),
            });
            return mailOptions;
        case "verificateConfirmed":
            Object.assign(mailOptions, {
                subject: "Verified account ✔",
                html: (0, htmlEmailVerificate_1.emailVerificateHtml)(),
            });
            return mailOptions;
        default:
            return mailOptions;
    }
};
exports.maipOption = maipOption;
//# sourceMappingURL=mailOption.helpers.js.map