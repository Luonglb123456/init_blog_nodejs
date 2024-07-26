const express = require('express')
const router = express.Router()

const newControllers = require('../app/controllers/NewsControllers')
//import thằng news controllers

// newControllers.index()

//tạo tuyến đường 
router.use('/:slug', newControllers.show)
router.use('/', newControllers.index) //nếu chỉ /news thôi thì dùng method index đã định nghĩa ở file NewsControllers


module.exports = router