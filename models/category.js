const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  link: {
    required: true,
    type: String
  },
  image: {
    required: true,
    type: String
  },
  description: {
    required: false,
    type: String
  }
})

module.exports = mongoose.model('Category', dataSchema)