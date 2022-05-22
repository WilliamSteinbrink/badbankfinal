const express = require('express')
const router = express.Router()
const {homePage, login, createAccount} = require('../controllers/publicController')
const {protect} = require('../middleware/authMiddleware')

router.get('/home', protect, homePage)

router.post('/login', login)

router.post('/', createAccount)

module.exports = router