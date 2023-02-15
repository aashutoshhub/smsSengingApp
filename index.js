const express = require('express');
const fast2sms = require('fast-two-sms')

const app=express();

require('dotenv').config();

//asking server to user  view engine ejs
app.set('view engine','ejs');


//a body parser for html post form.
app.use(express.urlencoded({extended:false}));


app.post('/sendMessage',async (req,res)=>{
    try {
        console.log(req.body);
    

    const response=await fast2sms.sendMessage({
        authorization : "TMykNKbVnJPa3SQ8qjAZ2L0F9weWR1zBsm75Dco4IuCrx6pdEikoIBu16tj3RxNbwvKrGdiU0DF78zMa",
        message : req.body.message,
        numbers : [req.body.number]
    });

    

    res.send('response : '+response);
    console.log('response : '+response);
    } catch (error) {
        res.send(error);
        res.end();
    }
})

app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.listen(8000,()=>{
    console.log('Running on port : 8000');
})