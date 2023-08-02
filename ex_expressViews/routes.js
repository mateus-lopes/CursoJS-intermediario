const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');


// rotas home
route.get('/', homeController.paginaInicial);

//rotas de contato
route.get('/contato', contatoController.paginaInicial);

route.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query);
});

module.exports = route;