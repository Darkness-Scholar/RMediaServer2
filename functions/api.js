import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import serverless from 'serverless-http'
import auth from "../routes/auth"
import user from "../routes/user"
import { media } from "../routes/media"

const app = express()
const main = express.Router()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

main.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.use("/", main)
app.use("/auth", auth)
app.use("/user", user)
app.use('/media', media)

module.exports.handler = serverless(app)