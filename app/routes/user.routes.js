const router = require('express').Router()
const db = require("../models");
const userModel = db.user;
const userController = require('../controllers/user.controller')

router.post('/signup', userController.signup)
router.post('/login', userController.login)

module.exports = router