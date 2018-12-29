const exp =require('express');
const router=exp.Router();
const path=require('path');
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-products.html'));
});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports=router;

