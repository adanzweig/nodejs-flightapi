// Load environment variables from .env file
require('dotenv').config(); 

// Import axios for making HTTP requests
const axios = require('axios');

/**
 * Asynchronously searches for roundtrip flight data.
 * @param {string} airportDep - Departure airport code
 * @param {string} airportArr - Arrival airport code
 * @param {string} dateStart - Start date of the flight
 * @param {string} dateEnd - End date of the flight
 * @param {number} adults - Number of adults
 * @param {number} children - Number of children
 * @param {number} infants - Number of infants
 * @param {string} status - Flight class (e.g., Economy)
 * @param {string} currency - Currency code (e.g., USD)
 * @returns {Promise<Object>} A promise that resolves to the flight data
 */
async function searchFlights(airportDep, airportArr, dateStart, dateEnd, adults, children, infants, status, currency){
    try {
        // Make a GET request to the flight API and return the response data
        const response = await axios.get(`https://api.flightapi.io/roundtrip/${process.env.API_KEY}/${airportDep}/${airportArr}/${dateStart}/${dateEnd}/${adults}/${children}/${infants}/${status}/${currency}`);
        return response.data;
    } catch(error) {
        // Log any errors that occur during the API request
        console.error(error);
    }
}

// Self-invoking async function to execute the search
(async () => {
    // Example usage of searchFlights function
    const flightData = await searchFlights('EZE', 'JFK', '2024-03-10', '2024-03-17', 2, 2, 0, 'Economy', 'USD');
    
    // Log the total amount in USD and handoff URL for each fare in the response
    console.log(flightData.fares.map(d => {
        return { price: d.price.totalAmountUsd, link: d.handoffUrl };
    }));
})();
