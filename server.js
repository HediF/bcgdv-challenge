require('log-timestamp');
const express = require('express'); 
const cors = require('cors');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express(); 
const ENV_FILE = path.join(__dirname, '.env');
const env = require('dotenv').config({ path: ENV_FILE });
const port = process.env.PORT || 5000;

// Enable the express server to respond to preflight requests 
app.use(cors());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`[INFO] [Server.js] Listening on port ${port}`)); 

// create a GET route
app.get('/weather-info', async (req, res) => { 
  try {
    const response = await fetch(`${process.env.OPEN_WEATHER_API}q=London,uk&APPID=${process.env.API_KEY}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
    })
    const data = await response.json();
    res.send(data);
  } catch (error) { 
      console.log("[ERROR] [Server.js] Following error occured while fetching the weather data: " + error)
  }
});
