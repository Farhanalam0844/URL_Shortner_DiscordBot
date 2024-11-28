const express= require('express');
const { handleSignup } = require('../controllers/users');
const router = express.Router();

router.get('/signup',handleSignup)
module.exports=router;
