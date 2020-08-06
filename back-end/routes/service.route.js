const express = require('express')
const serviceController = require('../controllers/service.controller')

const router = express.Router()

router.get('/', serviceController.getIndex)

router.get('/create', serviceController.getCreate)

router.post('/create', serviceController.postCreate)

router.get('/update/:id', serviceController.getUpdate)

router.post('/update/:id', serviceController.postUpdate)

router.get('/delete/:id', serviceController.getDelete)

router.get('/search', serviceController.getSearch)

module.exports = router



