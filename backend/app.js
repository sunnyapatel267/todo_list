import express from 'express'
import cors from 'cors'
import { getList, getTask, createTask, removeTask } from './database.js'

const app = express()

app.use(express.static('dist'))
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.get("/list", async (req, res) => {
    const list = await getList()
    res.send(list);
})

app.get("/list/:id", async (req, res) => {
    const id = req.params.id
    const task = await getTask(id)
    res.send(task)
})

app.post("/list", async (req, res) => {
    const content = req.body.content
    const addToTask = await createTask(content)
    res.send(addToTask)
})

app.delete("/list/:id", async (req, res) => {
    const id = req.params.id
    const taskRemoved = await removeTask(id)
    res.send(taskRemoved)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

const port = 8080
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})