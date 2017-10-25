'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = express.Router();
const app = express();

//Conecta ao Banco
mongoose.connect('mongodb://jhonesgoncalves:41321158@ds040877.mlab.com:40877/nodestore');

//Carrega os Models
const Product = require('./models/product');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app