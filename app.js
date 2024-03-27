require('express-async-errors')
const express = require('express')
const cors = require('cors')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const notesRouter = require('./controllers/notes')
const mw = require('./utils/middlewares')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/login', loginRouter)
app.use('/api/user', usersRouter)
app.use('/api/notes', notesRouter)

app.use(mw.errorHandler)

module.exports = app