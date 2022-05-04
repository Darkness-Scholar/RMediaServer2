import express from 'express'
export const user = express.Router()

user.get('/', (req, res) => {
    res.json({ method: 'GET ALL USER', user: [] })
})

user.get('/:id', (req, res) => {
    res.json({ method: 'GET A USER', user: req.params.id })
})



