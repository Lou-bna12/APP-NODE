const express = require('express');
const app = express();


//Routes

app.get('/blog',(req, res) =>{
    res.send('Hey blog')
});

app.listen(5000, () =>{
     console.log("Node API app est en cours d'exécution sur le port  5000 ")
});
 