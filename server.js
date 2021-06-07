
//Setting Variables 

const express = require('express');
const app = express();
const port = 3000;
const methodOverride = require('method-override');

// Requiring EJS 

const Pokemon = require('./models/pokemon.js');

//Middleware

app.use(express.urlencoded({extended: false}));

app.use((req, res, next) =>{
  console.log('I run all things');
  next();

});

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

    // NEW
app.get("/pokemon/new", (req, res) => {
    res.render('new.ejs');
  });

  app.get('/pokemon/edit', (req, res)=>{
    res.render('edit.ejs', {
      Pokemon: Pokemon[req.params.indexOfPokemonArray],
      index: req.params.indexOfPokemonArray
    });
  });

    // SHOW
    app.get('/pokemon/:indexOfPokemonArray', (req, res) => {
      res.render('show.ejs', { 
        Pokemon: Pokemon[req.params.indexOfPokemonArray] 
      });
    });    
  
  // CREATE
  app.post("/pokemon", (req, res) => {
    Pokemon.push(req.body);
    console.log(Pokemon);
    res.redirect("/pokemon");
  });
  // Products route for CURL lesson
  app.post('/products', (req, res)=>{
    console.log('Create route accessed!');
    console.log('Req.body is: ', req.body);
    res.send(req.body);
  });
  
  // DELETE route 
  
  app.delete('/pokemon/:indexOfFruitsArray', (req, res) =>{
    fruits.splice(req.params.indexOfPokemonArray, 1);
    res.redirect('/pokemon');
  })
  
  //UPDATE
  
  
    app.put('/pokemon/:indexOfPokemonArray', (req, res) => { 
      
      
      Pokemon[req.params.indexOfPokemonArray] = req.body; 
      res.redirect('/pokemon'); 
    });
  

//Listening Port 

app.listen(3000);
console.log('listening port');


