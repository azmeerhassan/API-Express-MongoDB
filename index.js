const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res)=>{
    res.send('Hello From Node API')
})





mongoose.connect('mongodb+srv://azmeerhassanammad:yUDwsCYQB91nrOJd@cluster0.cloqafa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Connected to MongoDB Atlas');
    app.listen(3000, ()=>{
        console.log('Server is running on port 3000'); 
    }) 
})
.catch((err)=>{
    console.log('Error connecting to MongoDB Atlas', err); 
})