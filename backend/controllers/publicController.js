const asyncHandler = require('express-async-handler')

// @desc    Home landing page
// @route   GET /
// @access  public
const homePage = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Homepage for banking app'})
})

// @desc    login page
// @route   GET /login
// @access  public
const login = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Login page'})
})

// @desc    Create an account
// @route   GET /createaccount
// @access  public
const createAccount = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Create Account page'})
})

module.exports = {
  homePage,
  login,
  createAccount,
}