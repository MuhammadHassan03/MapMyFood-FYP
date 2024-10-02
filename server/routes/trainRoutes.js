const express = require('express');
const { getAllTrains } = require('../services/trainServices/indes');

const trainRoutes = express.Router;

trainRoutes.get('/getAllTrains', getAllTrains)

export { trainRoutes }