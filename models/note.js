const mongoose = require('mongoose')
const { Schema } = mongoose

const noteSchema = new Schema({
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

noteSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString(),
    delete ret._id
    delete ret.__v
    delete ret.user
  }
})

module.exports = mongoose.model('Note', noteSchema)