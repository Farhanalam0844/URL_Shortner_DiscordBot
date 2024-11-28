const express = require('express')
const Url= require('../models/url')
const generate = require('meaningful-string');

async function handleGenerateNewUrl(req,res){
    const body= req.body;
    let options = {
        "min":8,
        "max":15,
        "capsWithNumbers":true
   }
    const shId = generate.shortId(options);
    
    if(!body.url){
        // res.status(400).json({err:"Error Url is required"})

    }
    else{
       const data= await Url.create({
            ShortId:shId,
            redirectUrl:body.url,
            visitedHistory:[]
    
        })

       return res.render('home',{
            id:data.ShortId
        });
    }
}
async function handleUrlAnalytics(req,res){
    const shortId=req.params.shortId;
    const result= await Url.findOne({
       shortId
    });
    return res.render("home",{totalClicks:result.urlHistory.length,
         analytics:result.urlHistory}
    )
}
module.exports={
    handleGenerateNewUrl,
    handleUrlAnalytics
}