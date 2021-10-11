const GLOBAL_CONSTANTS = require('../../src/GlobalConstants');

let randomCities = ['Munich', 'Hamburg', 'Paris', 'Tunis'];
let randomCity = randomCities[Math.floor(Math.random()*randomCities.length)];

// Testing the landing page
describe("renders the home page", () => {
    beforeEach(() => {
        cy.visit('/', { timeout: 30000 })
    });

    // Testing rendered elements to the DOM
    it("renders correctly", () => {
        cy.get("#London").should("exist");
        cy.get("#Berlin").should("exist");
    });

    // Adding a new random location using the search bar and checking if a location item is added to the DOM
    it("adds a new location", () => {
        cy.get('input#add-weather-input')   
        .type(randomCity); 
        cy.get('button').click();  
        cy.get("#" + randomCity).should("exist");
    });
    
    // Testing the navigation through the app 
    it('cy.go() - use the navigation buttons to test the routing', () => {
        let randomDefaultCity = GLOBAL_CONSTANTS.STANDARD_LOCATIONS[Math.floor(Math.random() * GLOBAL_CONSTANTS.STANDARD_LOCATIONS.length)];
        cy.wait(3000)
        cy.get('#' + randomDefaultCity).click()
        cy.location('pathname').should('eq', '/location/' + randomDefaultCity.toLocaleLowerCase())
        cy.get("#information-table").should("exist");
        cy.get("#left-container").should("exist");
        cy.go('back')
    })
 });

