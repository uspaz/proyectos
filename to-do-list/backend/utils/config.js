require("dotenv").config()

const MONGO_URI = process.env.MONGO_DB

const PORT = process.env.PORT

module.exports = {
    MONGO_URI,
    PORT
}
