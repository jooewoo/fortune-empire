const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  tax: {
    type: Number,
    required: true
  },
  disposable_income: {
    type: Number,
    required: true
  },
  created: false,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Profile', profileSchema)
