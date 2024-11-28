const express= require('express');
const {handleGenerateNewUrl,handleUrlAnalytics}= require('../controllers/url')
const router = express.Router();

router.post('/',handleGenerateNewUrl);
router.get("/analytics/:shortId",handleUrlAnalytics)

module.exports=router;
