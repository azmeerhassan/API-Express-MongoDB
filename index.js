const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send('Hello From Node API')
})




mongoose.connect('mongodb+srv://azmeerhassanammad:yUDwsCYQB91nrOJd@cluster0.cloqafa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        })
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB Atlas', err);
    })