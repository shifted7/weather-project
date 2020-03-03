'use strict';

const express = require ('express');
const app = express();
require('dotenv').config();
const superagent = require ('superagent');
const methodOverride = require('method-override');
// const pg = require('pg');
// const client = new pg.Client(process.env.DATABASE_URL);
// client.on('error', err=>console.error(err));
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


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});