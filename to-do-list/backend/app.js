const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

const tasksRouter = require("./controllers/tasks")
const config = require("./utils/config")
const middleware = require("./utils/middleware")
const logger = require("./utils/logger")


mongoose.set("strictQuery", false)

mongoose.connect(config.MONGO_URI)
    .then( () => {
        logger.info("connected to MongoDB")
    })
    .catch( (err) => {
        logger.error("error connecting to MongoDB", err)
    })

app.use(cors())

app.use(express.json())
app.use(middleware.requestLogger)

app.use("/api/tasks", tasksRouter)

app.use(middleware.handleError)
app.use(middleware.unknownEndpoint)

module.exports = app
