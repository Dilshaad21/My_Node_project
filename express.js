const express=require('express');
const app=express();
const parser=require('body-parser');
app.use(parser.urlencoded({extended:false}));
app.get('/text',(req,res,next)=>{
    console.log('In the text middleware!');
    res.send('<body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></body>')
});
app.post('/product',(req,res,next)=>{
    console.log('reached middleware by post request. YAAAAAh!');
    console.log(req.body);
    res.redirect('/');
})
app.get('/',(req,res,next)=>{
    console.log('Redirected');
    res.send('<body>Some body text</body>');
})

app.listen(300);