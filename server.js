require('log-timestamp');
const express = require('express'); 
const cors = require('cors');
const path = require('path');
var bodyParser = require('body-parser')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express(); 
const ENV_FILE = path.join(__dirname, '.env');
const env = require('dotenv').config({ path: ENV_FILE });
const port = process.env.PORT || 5000;

// Enable the express server to respond to preflight requests 
app.use(cors());

// create application/json parser
var jsonParser = bodyParser.json()

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`[INFO] [Server.js] Listening on port ${port}`)); 

// GET route for fetching weather data information
app.post('/weather-info', jsonParser, async (req, res) => { 

  const weatherLocationUrl = this.onConstructWeatherUrl(req.body.location);

  try {
    const response = await fetch(weatherLocationUrl, {
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

function onConstructWeatherUrl(location) {
  let params = {
    q: location,
    APPID: process.env.API_KEY
  };

  let query = Object.keys(params)
               .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
               .join('&');
  return query;  
}