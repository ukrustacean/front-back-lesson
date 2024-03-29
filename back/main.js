"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.text());
app.use((0, cors_1.default)());
const DB = [];
app.get('/notes', (_req, res) => {
    console.log(DB);
    res.status(200).json({ notes: DB });
    res.end();
});
app.post('/note', (req, res) => {
    const { note } = JSON.parse(req.body);
    DB.push(note);
    res.status(200);
    res.end();
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
