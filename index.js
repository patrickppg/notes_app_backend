require('dotenv').config()

const mongoose = require('mongoose')
const app = require('./app')

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.log('Error connecting to MongoDB'))

app.listen(process.env.PORT, () => {
  console.log('Server running on port 3000')
})