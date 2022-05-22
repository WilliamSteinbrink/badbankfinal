const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Home landing page
// @route   GET /
// @access  public
const homePage = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Homepage for banking app'})
})

// @desc    Authenticate user
// @route   POST /login
// @access  public
const login = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  // Find user by email
  const user = await User.findOne({email})

  if(user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user credentials')
  }
})

// @desc    Create an account
// @route   POST /createaccount
// @access  public
const createAccount = asyncHandler(async (req, res) => {
  const { name, email, password, balance } = req.body

  if(!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Checking if user exists
  const userExists = await User.findOne({email})

  if(userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    balance: 0,
  })

  if(user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

module.exports = {
  homePage,
  login,
  createAccount,
}