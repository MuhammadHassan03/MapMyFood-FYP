const axios = require('axios');

const getAllTrains = async (req, res) => {
    const response = await axios.get('https://api.pakraillive.com/api/Train/GetTrainStations');
    console.log('response', response)
    return(
        res.json("Request Complete")
    )
}

module.exports = { getAllTrains }