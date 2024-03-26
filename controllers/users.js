const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const router = express.Router()

router.use(express.json())

router.post('/', async (req, res) => {
  const { name, username, password } = req.body
  const passwordHash = await bcrypt.hash(password, 10)

  const newUser = await User.create({
    name,
    username,
    passwordHash
  })

  res.status(201).json(newUser)
})

module.exports = router