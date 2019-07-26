const express = require('express');

const routes = express.Router();

const PlayerController = require('./controllers/PlayerController');

//Primeira rota
routes.get('/players', PlayerController.index);
routes.get('/players/:id', PlayerController.show);
routes.get('/players/name/:name', PlayerController.findPlayerName);
routes.post('/players',PlayerController.store);
routes.put('/players/:id',PlayerController.update);
routes.delete('/players/:id',PlayerController.destroy);

module.exports = routes;