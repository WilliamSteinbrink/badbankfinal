const mongoose = require('mongoose')

const withdrawSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  amount: {
    type: Number,
    required: [true, 'Please enter an amount to withdraw']
  }
})

module.exports = mongoose.model('Withdraw', withdrawSchema)