const express = require('express')
const studentController = require('../controllers/student.controller')

const router = express.Router()

router.get('/', studentController.getIndex)

router.get('/create', studentController.getCreate)

router.post('/create', studentController.postCreate)

router.get('/update/:id', studentController.getUpdate)

router.post('/update/:id', studentController.postUpdate )

router.get('/delete/:id', studentController.getDelete)

router.get('/search', studentController.getSearch)

module.exports = router


