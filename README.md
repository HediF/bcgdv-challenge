## Prerequisites
1. NPM is installed on your PC.

## Installation
1. Clone this repository
2. Install the packages using npm install (in your command line execute: npm install)
3. Add the .env file that contains configuration variables and the API key for OpenWeatherMap in the root directory of the project (configuration variabkes will be sent by e-mail during this project)
4. Launch the app in development mode using npm start (in your command line execute: npm start)
5. Open a new terminal and launch the server using node server.js from the project root directory (In a new terminal execute: node server.js)

After following the mentionned steps, you should have the frontend running on port 3000 and the server on port 5000 per default (Can be changed depending on the configuration)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `node server.js`

Runs the server file situated in the root directory of this project.\
Runs on [http://localhost:5000]


## Description of the app

This application enables a user to see a list of locations with their respective temperatures in a dashboard view. 
When a user opens the application, first of all he will be asked to enable his localization in order to fetch his coordinates and show him the card that contains the temperature in his/her city.
The user has also the possibility of entering a random city name in a search bar and display its respective temperature card in the dashboard. If the user enters a city with a wrong name or that does not have any weather information in OpenWeatherAPI, the user will be notified with an error message in the dashboard page.

When a specific location in the landing page is selected, the user will be redirected to a page where more details about the selected location are displayed. Those details include the maximum and minimum temperature and information about sunrise, sunset, humidity, visiblity in a table on the right side of the screen.

The app is responsive and UI elements will be adjusted depending on the screen width.

## How I approached the development of the App

1- Determined the main key features in order to develop an MVP (Fetching of the weather data, Dashboard creation, dynamic routing, stretch, what to store in the localstorage and how).

2- Started with the main task (Fetching the weather data of a specific location from OpenWeather API statically). For this purpose the server has been created in order to hide the API key used to access OpenWeatherAPI from the client.

3- Creation of the static UI elements used to display the weather cards in the dashboard (created a weather card jsx reusable component and called it multiple times in the dashboard)

4- Combining step 2 and 3 in order to dynamically display the city weather information card based on the location name (Wether it is a default location or entered by the user).

5- Created the logic used for the routing to a new page with the location name as an endpoint when a card in the dashboard is clicked.

6- Prepared the static layout for the stretch component.

7- Persisted the weather information data for each component in the localstorage in order to use them when the user refreshes the page or selects a specific card instead of fetching again from the server.

8- Combined steps 6 and 7 in order to dynamically display the extra information about a specific location when selected in the stretch component after the routing (The information about the location will be fetched from the localstorage depending on the respective endpoint used for the routing).

9- Added the logic to display information about the current city of the user using his coordinates (get permission from the user then include his location in the array of locations that will be fetched from the server). As the fetched data structure (coordinates versus city name from OpenWeatherMap) is different, the logic to display the users current location information has been implemented separately.

10- Created the extra feature in order the allow the user to fetch data for locations of his/her choice following the same logic in step 9 (the entered city will be only added to the locations state array). There was no need to implement a new logic because the process is similar to fetching data for the default locations by city name.

## What I would improve

- More error handling (Example: instead of just logging that there have been a problem with fetching the data, return a property to the other component and update its state accordingly, then accordingly display a UI element to give the user more information about the respective error) or by adding an error function while getting authorization to access the user location.
- Pass the extra information as props to the routed component instead of fetching the extra information from the localstorage when a location card is clicked.
- Store all fetched locations inside one single array of fetched locations inside the localstorage instead of storing them separately (also in the localstorage).
- Delete the data inside the localstorage every 30 minutes in order to re-fetch the data in case there have been changes on the server side.
- Change the component used to fetch the weather data to a class component instead of a functional component because it would be more easy to handle http requests
- Add extra features (Filter for temperature unit, weather icon (sun, rain))
- More refactoring and code cleaning
- For the purpose of this project there was no big need, but using an external library for state managment such as redux could be helpful.
- Add docker file
- Use css classes
- Use global css attributes by injecting them in the body or in a wrapper component 

## Elements
`components/api` : contains the method used to redirect the fetch request to the server running on port 5000
`components/containers`: Wrapper components (Main layout, grid)
`components/viewElements`: Contains the app main and reusable elements (location item to show cards in the dashboard, information table/ location weather infos for the stretch component), landing page containing the dashboard.
`routes`: contains the routing of the app.
`App.js`: Root component.
`GlobalConstants`: Contains constants that are used for several UI elements
`server.js`: Express server in order to fetch the weather data using the OpenWeatherMap API key and location name / coordinates. This has not been directly done from the client side for security purposes.

## Testing

TODO

In order to run the test, run npm test while the application is app and running, then select landingpage.js in the cypress tab that will appear.

