const express = require('express')
const router = express.Router()
const {getUser, userDeposit, userWithdraw} = require('../controllers/userController')

router.get('/:id', getUser)

router.put('/:id/deposit/:amount', userDeposit)

router.put('/:id/withdraw/:amount', userWithdraw)

module.exports = router