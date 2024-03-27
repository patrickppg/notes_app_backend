require('dotenv').config()
const jwt = require('jsonwebtoken')
const Note = require('../models/note')
const User = require('../models/user')
const express = require('express')
const router = express.Router()

router.use(express.json())

function getTokenFromReq(req) {
  const authorization = req.header('Authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  } else return null
}

router.post('/', async (req, res) => {
  const { content } = req.body
  const token = getTokenFromReq(req)
  const authUser = jwt.verify(token, process.env.SECRET)
  const user = await User.findById(authUser.id)
  const savedNote = await Note.create({
    content,
    user: user.id
  })

  user.notes.push(savedNote.id)
  await user.save()

  res.status(201).json(savedNote)
})

module.exports = router