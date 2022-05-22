const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

// @desc    Get all of user's data
// @route   GET /api/user/:id
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  const {_id, name, email, balance} = await User.findById(req.user.id)

  res.status(200).json({
    id: _id,
    name,
    email,
    balance,
  })
  console.log(req.body)
  res.status(200).json({message: `Landing page for user id ${req.params.id}`})
})

// @desc    Get all of user's data
// @route   PUT /api/user/deposit/
// @access  Private
const userDeposit = asyncHandler(async (req, res) => {
  const {_id, name, email, balance} = await User.findById(req.user.id)

  const amount = parseInt(req.body.amount)
  const newBalance = balance + amount

  User.updateOne({id: _id},
    {balance: parseInt(newBalance)},
    (err, user) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Updated user balance: ', user)
      }
    }
  )

  res.status(200).json({
    id: _id,
    balance: newBalance
  })
})

// @desc    Making withdrawl
// @route   PUT /api/user/withdraw/
// @access  Private
const userWithdraw = asyncHandler(async (req, res) => {
  const {_id, name, email, balance} = await User.findById(req.user.id)

  const withdrawAmount = parseInt(req.body.amount)
  const newBalance = (balance - withdrawAmount)

  User.updateOne({id: _id},
    {balance: parseInt(newBalance)},
    (err, user) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Updated user balance: ', user)
      }
    }
  )

  res.status(200).json({
    id: _id,
    balance: newBalance
  })
})

module.exports = {
  getUser,
  userDeposit,
  userWithdraw,

}