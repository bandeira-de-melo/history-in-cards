import express from 'express';
const app = express();
app.use(express.json());
const example = "blahlll";
app.listen("4000", () => console.log("Server running"));
