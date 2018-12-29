const exp=require('express');
const parser=require('body-parser');
const app=exp();
const path=require('path');
const admin=require('./routes/admin');
const shop=require('./routes/shop');
app.use(parser.urlencoded({extended:false}));
app.use(exp.static(path.join(__dirname)));  
app.use('/admin',admin);
app.use(shop);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
})
app.listen(90);