const express = require('express');
const { getAllTrains, getAllStations } = require('../services/trainServices');

const trainRoutes = express.Router();

trainRoutes.get('/getAllTrains', getAllTrains).get('/getAllStations', getAllStations)

module.exports = {trainRoutes}