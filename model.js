const mongoose=require('mongoose')
const Details=mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
    ,
    url:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Details',Details)