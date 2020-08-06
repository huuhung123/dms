const express = require('express')
const userController = require('../controllers/user.controller')

const router = express.Router()

router.get('/', userController.getIndex)

router.get('/create', userController.getCreate)

router.post('/create', userController.postCreate)

router.get('/login', userController.getLogin)

router.post('/login', userController.postLogin)

router.get('/delete/:id', userController.getDelete)

router.get('/update/:id', userController.getUpdate)

router.post('/update/:id', userController.postUpdate)

module.exports = router


