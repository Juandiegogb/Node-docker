import express from "express"
import {Router} from "express"

const app = express()
const router = Router()

app.use(router)
app.listen(3000,()=>{
console.log("server ready")
})


router.get("/", (req,res)=>{
res.send("hola este es un test desde docker")

})
