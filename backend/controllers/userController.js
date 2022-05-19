const asyncHandler = require('express-async-handler')

// @desc    Get all of user's data
// @route   GET /api/user/:id
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  console.log(req.body)
  res.status(200).json({message: `Landing page for user id ${req.params.id}`})
})

// @desc    Get all of user's data
// @route   PUT /api/user/:id/deposit/:amount
// @access  Private
const userDeposit = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({message: `User ${req.params.id} is depositing ${req.params.amount}`})
})

// @desc    Making withdrawl
// @route   PUT /api/user/:id/withdraw/:amount
// @access  Private
const asyncHandler(userWithdraw = async (req, res) => {
  res.status(200).json({message: `User ${req.params.id} is withdrawing ${req.params.amount}`})
})

module.exports = {
  getUser,
  userDeposit,
  userWithdraw,

}