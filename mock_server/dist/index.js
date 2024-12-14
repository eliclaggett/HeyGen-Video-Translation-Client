"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8000;
app.use((0, cors_1.default)());
// Define routes
// GET /status
app.get('/status', (req, res) => {
    (0, routes_1.serveStatus)(req, res);
});
// 404: (Must be last route)
app.get('*', (req, res) => {
    (0, routes_1.serve404)(req, res);
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
