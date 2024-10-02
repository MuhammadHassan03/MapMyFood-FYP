// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const useAllStations = () => {
//     const [stations, setStations] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Define the fetch function inside useEffect
//     useEffect(() => {
//         const fetchStations = async () => {
//             try {
//                 const CLIENTURL = process.env.CLIENTURL || 'http://localhost:5000';
//                 const response = await axios.get(`${CLIENTURL}/api/train/getAllStations`);
//                 console.log('response', response.data);
//                 setStations(response.data);
//             } catch (error) {
//                 setError(error);
//                 console.error('Error fetching stations:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         // Call the fetch function inside useEffect
//         fetchStations();
//     }, []); // Empty dependency array ensures this runs only on component mount

//     return { stations, loading, error };
// };

// export { useAllStations };
