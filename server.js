const express = require('express');
const app = express();


//Routes

app.get('/',(req, res) =>{
    res.send('Bonjour tout le monde')
});

app.listen(5000, () =>{
     console.log("Node API app est en cours d'exécution sur le port  5000 ")
});
 