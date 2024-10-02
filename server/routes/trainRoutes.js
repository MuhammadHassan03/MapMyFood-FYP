const express = require('express');
const { getAllTrains } = require('../services/trainServices');

const trainRoutes = express.Router();

trainRoutes.get('/getAllTrains', getAllTrains)

module.exports = {trainRoutes}