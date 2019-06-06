const router = require('express').Router()



const {register} = require('./../userController').users;


router.post('/register', register);


module.exports = router