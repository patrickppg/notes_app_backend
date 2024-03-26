const express = require('express')
const cors = require('cors')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/user', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app