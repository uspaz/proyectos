const logger = require("./logger")

const requestLogger = (req, res, next) => {
    logger.info("Method:", req.method)
    logger.info("Path:", req.path)
    logger.info("Body:", req.body)
    logger.info("---")
    next()
}

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: "unknown endpoint" })
}

const handleError = (err, req, res, next) => {
    logger.error(err.message)
    

    if(err.name === "CastError"){ 
        return res.status(400).send({ err: "malformatted id"})
    }

    if (err.name === "ValidationError") {
        return res.status(400).json({ error: err.message })
    }

    next(err)
    
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    handleError
}