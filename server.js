
//Setting Variables 

const express = require('express');
const app = express();
const port = 3000;

// Requiring EJS 

const Pokemon = require('./models/pokemon.js');

//Route to index 

app.get('/', (req, res)=>{
    res.send(Pokemon);
})

//Route to Pokemon Index 

app.get('/pokemon', (req, res)=>{
    res.render('index.ejs', {
        allPokemon: Pokemon
        });
    });

//Listening Port 

app.listen(3000);
console.log('listening port');


