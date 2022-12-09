"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationEmail = void 0;
const mailOption_helpers_1 = require("../helpers/mailOption.helpers");
const notification_service_1 = require("../services/notification.service");
const notificationEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, code, type } = req.body;
    const message = (0, mailOption_helpers_1.maipOption)(type, email, code);
    yield (0, notification_service_1.sendEmail)(message);
    res.status(200).json({ message: "The mail has been sent successfully" });
});
exports.notificationEmail = notificationEmail;
//# sourceMappingURL=notification.controllers.js.map