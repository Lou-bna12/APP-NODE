const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel')
const app = express();


//Routes

app.get('/blog',(req, res) =>{
    res.send('Hey blog, bienvenu sur mon blog')
});

app.use(express.json());




app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);

    } catch(error) {
        res.status(500).json({message: error.message})
    }
});


app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
});

app.get('/products/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


mongoose.
connect('mongodb+srv://Lou:Lou-bna12@cluster0.udhid3i.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('MongoDB connectée')
    app.listen(5000, () =>{
        console.log("Node API app est en cours d'exécution sur le port  5000 ")

   });

}).catch(() => {
    console.log(erro)
})