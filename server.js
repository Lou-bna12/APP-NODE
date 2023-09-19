const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Routes

app.get('/blog',(req, res) =>{
    res.send('Hey blog, bienvenu sur mon blog')
});






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


//update a product

app.put('/products/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        // We can't find any product in the BDD

        if(!product){
              return res.status(404).json({message: `Aucun produit ne peut être trouvé avec  l'identifiant : ${id}` });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        

    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// Delete a product

app.delete('/products/:id', async(req,res) =>{
try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product){
    return res.status(404).json({message: `Aucun produit ne peut être trouvé avec  l'identifiant : ${id}` })
   }
    res.status(200).json(product) ;

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