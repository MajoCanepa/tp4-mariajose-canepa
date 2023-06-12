const express = require('express')
const routes =  express.Router();
const {mostrarGet, mostrarPost, mostrarPut, mostrarDelete} = require('../controllers/controller');

routes.get('/',mostrarGet)
routes.post('/',mostrarPost)
routes.put('/',mostrarPut)
routes.delete('/',mostrarDelete)

module.exports = routes;