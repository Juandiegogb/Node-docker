import express from "express";
import { Router } from "express";
import path from "path";

const app = express();
const router = Router();

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server ready on port ${port}`);
});

router.get("/", (req, res) => {
  res.send("hola este es un test desde docker");
});

router.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
