const mongoose=require('mongoose');

const mongoURL= 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL)

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');
    
})

db.on('error',(error)=>{
    console.error('error to mongodb server',error);
    
})

db.on('disconnected',()=>{
    console.log('disconnected to mongodb server');
    
})

module.exports={
    db
}