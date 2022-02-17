"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bson_1 = require("bson");
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.static("./"));
const object = {
    name: "my video",
    video: (0, fs_1.readFileSync)("video2.mp4")
};
const bsonObject = (0, bson_1.serialize)(object);
(0, fs_1.writeFileSync)("video.bson", bsonObject);
app.listen(port, () => console.log(`listening on port ${port}`));
