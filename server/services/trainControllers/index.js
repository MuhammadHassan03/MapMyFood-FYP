const axios = require('axios');

const getAllTrains = async (req, res) => {
    try {
        const response = await axios.get('https://api.pakraillive.com/api/Train/GetTrainStations');
        console.log('res', res)
        res.status(200).json(response.data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong while fetching train stations' });
    }
}

module.exports = { getAllTrains }