const mongoose = require('mongoose')

const depositSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  amount: {
    type: Number,
    required: [true, 'Please enter an amount to deposit']
  }
})

module.exports = mongoose.model('Deposit', depositSchema)