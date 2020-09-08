const express = require('express')
const bodyParcer = require('body-parser')
require('express-group-routes')
require('dotenv').config()

const app = express()
const port  = process.env.PORT
console.log('COBA UPDATE GIT')

//Import Controller
const todoController = require('./controller/todoController')
const { Router, response, request } = require('express')

app.use(bodyParcer.json())

app.group('/api/v1',(router) => {
    router.get('/todos', todoController.index)
    router.post('/todo', todoController.create)
    router.get('/todo/:id', todoController.show)
    router.delete('/todo/:id', todoController.destroy)
    router.put('/todo/:id', todoController.update)
})

app.listen(port, () => {
    console.log(`DEVELOPMENT MODE RUNNING PORT ${port} `)
})