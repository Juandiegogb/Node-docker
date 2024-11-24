"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const app = (0, express_1.default)();
const router = (0, express_2.Router)();
app.use(router);
app.listen(3000, () => {
    console.log("server ready");
});
router.get("/", (req, res) => {
    res.send("hola este es un test desde docker");
});
