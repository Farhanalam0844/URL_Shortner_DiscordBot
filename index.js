const express = require('express');
const {handleConnectMongoDB}= require('./connection/url')
const path = require('path')
const userRoutes=require('./routes/url');
const Url = require('./models/url');
const staticRoute=require('./routes/staticRoute')
const userRoute=require('./routes/userRoute')
const app =express();

const PORT =  4000;

handleConnectMongoDB('mongodb://127.0.0.1:27017/url-Shortner');
// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.set('view engine','ejs')
// app.set('view',path.resolve("./view"));
app.set('views', path.join(__dirname, 'view'));

app.get('/test',async(req,res)=>{
    const allUrl=await Url.find({});
    // res.render(home)
    res.render('home', { urls: allUrl }); 
})
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.use('/url',userRoutes);
app.use('/user',userRoute);


app.get('/:shortId',async (req,res)=>{
    const shortId= req.params.shortId;
    const entry=await Url.findOneAndUpdate({
        shortId
    },{
        $push:{
            urlHistory:{
               timeStamp: Date.now()
            }

        }
    })
    if (!entry ) {
        /* console.log(entry);
         console.log(entry.redirectUrl);*/

        return res.status(404).send("URL not found");
    }
    res.redirect(entry.redirectUrl)
});

app.get('/',staticRoute)
app.listen(PORT,()=> console.log(`MongoDb connected Port:${PORT}`))