const express = require('express')
const router = express.Router()
const {homePage, login, createAccount} = require('../controllers/publicController')


router.get('/', homePage)

router.post('/login', login)

router.post('/createaccount', createAccount)

module.exports = router