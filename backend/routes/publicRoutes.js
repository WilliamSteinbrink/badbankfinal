const express = require('express')
const router = express.Router()
const {homePage, login, createAccount} = require('../controllers/publicController')


router.get('/', homePage)

router.get('/login', login)

router.get('/createaccount', createAccount)

module.exports = router