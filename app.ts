import express from "express";
import { Router } from "express";

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
