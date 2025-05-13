const tasksRouter = require("express").Router()
const Tasks = require("../model/task")

tasksRouter.get("/", async (req, res) => {
    const tasks = await Tasks.find({})
    res.status(200).json(tasks)
})

tasksRouter.delete("/", async (req, res) => {
    await Tasks.deleteMany({})
    res.status(202).end()
})

tasksRouter.post("/", async (req, res) => {
    const { content, priority } = req.body
    
    const task = new Tasks({
        content,
        check: false,
        priority,
    })

    const addTask = await task.save()
    res.status(201).json(addTask)
})


module.exports = tasksRouter