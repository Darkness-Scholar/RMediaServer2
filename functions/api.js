import os from "os"
import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import serverless from 'serverless-http'

import { auth } from "../routes/auth"
import { user } from "../routes/user"
import { media } from "../routes/media"
import { film } from "../routes/film"

const app = express()
const main = express.Router()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(compression({
    level: 6
}))

console.log(`CPU THREADPOOL :: `, os.cpus().length)

main.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.use("/", main)
app.use("/auth", auth)
app.use("/user", user)
app.use('/media', media)
app.use('/film', film)

module.exports.handler = serverless(app)