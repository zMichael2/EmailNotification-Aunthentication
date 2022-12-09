"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const notification_router_1 = require("./routers/notification.router");
dotenv_1.default.config();
const port = process.env.PORT || 3001;
exports.app = (0, express_1.default)();
const apiParhs = { notification: "/api/notification" };
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use(apiParhs.notification, notification_router_1.notificationRouter);
exports.app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Notification email API Bloom",
        version: "1.0.0",
    });
});
exports.app.listen(port, () => {
    console.log(`Server initialized on port ${port}`);
});
//# sourceMappingURL=app.js.map