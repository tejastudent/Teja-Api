const express=require('express')
const mongoose=require('mongoose')
const Details=require('./model')
const app=express()
app.use(express.json())
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb+srv://tejajangam03:tejajangam03@cluster0.jkxhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("db connected")
}).catch(err=>console.log(err))

app.post('/additem',async(req,res)=>{
    const {category,name,price,url}=req.body
    console.log(req.body)
    try{
        const newData=new Details({category,name,price,url})
        await newData.save()
        const allData = await Details.find();
    console.log('All Data:', allData); // Ensure this logs before sending response
    return res.json(allData);
    }
    catch(err){
              console.log(err)
    }
})
app.get('/',async(req,res)=>{
    try{
        const allData = await Details.find();
    console.log('All Data:', allData); // Ensure this logs before sending response
    return res.json(allData);
    }
    catch(err){
        console.log(err)
    }
    
})
app.delete('/deleteitem/:id',async(req,res)=>{
    try{
         await Details.findByIdAndDelete(req.params.id)
         res.json(await Details.find())
    }
    catch(err){
        console.log(err)
    }
})
app.listen(3001,()=>{console.log("server is started....")})