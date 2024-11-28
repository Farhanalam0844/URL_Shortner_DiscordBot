const express= require('express');
const Url = require('../models/url');
 const router = express.Router();

router.use('/',async (req,res)=>{
    const allUrl=await Url.find({});
    res.render('home',{
        url:allUrl,
    });
})
router.get('/signup',(req,res)=>{
    res.render("signup")
})
module.exports=router;
