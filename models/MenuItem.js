const mongoose=require('mongoose');
const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        default:2,
    },
    taste:{
        type:String,
        required:true,
        enum:['Sweet','Spicy','Sour'],
    },
    is_drink:{
        type:Boolean,
        required:true,
        default:false,
    },
    ingredients:{
        type:[String],
        default:[],
    },
    num_sales:{
        type:Number,
        default:0
    },
})

const MenuItem=mongoose.model('MenuItem',menuItemSchema);

module.exports=MenuItem;