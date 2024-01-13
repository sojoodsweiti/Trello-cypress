/// <reference types="cypress" />
const email = "sojoodsweiti1@gmail.com";
const password = "F8WC9VYC";

before(() => {
    cy.visit("https://id.atlassian.com/login")
    cy.trelloLogin(email,password)

});
    
