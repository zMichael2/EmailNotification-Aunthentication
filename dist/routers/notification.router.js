"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationRouter = void 0;
const express_1 = require("express");
const notification_controllers_1 = require("../controllers/notification.controllers");
exports.notificationRouter = (0, express_1.Router)();
exports.notificationRouter.post("/", notification_controllers_1.notificationEmail);
//# sourceMappingURL=notification.router.js.map