 const express = require('express');
 const mongoose = require('mongoose');
 const methodeOverride = require('method-override');
 const bodyParser = require('body-parser')

 mongoose.connect('mongodb://localhost:27017/').then(() =>{
    console.log('connecter a la base de données');
 });

 const app = express();
 app.use(bodyParser.urlencoded({extends: false}))

 app.use(methodeOverride('_method'));

 app.set('view engine', 'pug');

 const indexRoutes = require('./routes/index');
 app.use('/', indexRoutes);
 const port = process.sourceMapsEnabled.PORT || 3000;


 app.listen(port, () => console.log(`serveur lancé sur le port ${port}.`));