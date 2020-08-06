const express = require('express')
const visitorController = require('../controllers/visitor.controller')
const router = express.Router()

router.get('/', visitorController.getIndex)

router.get('/create', visitorController.getCreate)

router.post('/create', visitorController.postCreate)

router.get('/update/:id', visitorController.getUpdate)

router.post('/update/:id', visitorController.postUpdate)

router.get('/delete/:id', visitorController.getDelete)

router.get('/search', visitorController.getSearch)

module.exports = router


