'use strict';
///////DEPENDENCIES AND LIBRARIES///////


const express = require ('express');
const app = express();

require('dotenv').config();

const superagent = require ('superagent');
const methodOverride = require('method-override');
const client = require('./libs/client');

require('ejs');

const PORT = process.env.PORT || 3001;

const routes = require('./routes.js');

// Configurations
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

// Routes
app.get('/', routes.handleHome);

client.connect()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    })
  );
