const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem.js');

router.post('/', async(req,res)=>{
    try{
        const data=req.body;
        const newItem=new MenuItem(data);
        const response=await newItem.save();
        console.log('new menu item saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();
        res.status(200).json(data); 
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})

router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType=='Sweet'||tasteType=='Sour'||tasteType=='Spicy'){
            const data=await MenuItem.find({taste: tasteType});
            console.log('response fetched'); 
            res.status(200).json(data);
        }
        else{
            res.status(404).json({error:'invalid taste type'});
        }
         
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})

module.exports=router;