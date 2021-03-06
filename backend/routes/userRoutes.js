const express = require('express')
const router = express.Router()
const {getUser, userDeposit, userWithdraw} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getUser)

router.put('/deposit/', protect, userDeposit)

router.put('/withdraw/', protect, userWithdraw)

module.exports = router