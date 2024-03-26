import express from 'express'
import cors from 'cors'

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json())

const DB: string[] = []

app.get("/notes", (_req, res) => {
    console.log(DB)
    res.status(200).json({ notes: DB }).send()
})

app.post("/note", (req, res) => {
    console.log(req.body)
    DB.push(req.body.note)
    res.status(200).send()
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})