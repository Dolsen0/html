import express from "express"
import cors from "cors"
const app = express()
const PORT = 4001

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("ok")
})

app.listen(PORT, ()=>{
    console.log("running")
})