/// <reference types="cypress" />
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import createNewCardAcctions from "../../../pageObjects/smokeTest/createNewCard/actions.cy";
import createNewCardAssertions from "../../../pageObjects/smokeTest/createNewCard/assertions.cy";

const sharedAction = new sharedActions()
const sharedAssertion = new sharedAssertions()
const url = "https://trello.com/u/sojoodsweiti/boards"
const createCard = new createNewCardAcctions()
const createCardAssertion = new createNewCardAssertions()
const sharedUtils = new sharedDataUtils()
const boardName = "New testing board" 
const cardName = "QA testing for trello app"

    before(() => {
        sharedAction.loginToTrello()
        sharedAssertion.checkUrlEqualValue(url)
        sharedUtils.createBoard(boardName).as('boardResponce')
    })

    Given("Navigate the board page", ()=>{
        cy.get("@boardResponce").then((data)=>{
            sharedAction.openBoard(data.body.name)
        })
    })

    When("Click on add a card button",()=>{
        cy.wait(4000)
        createCard.clickNewCard()
    })

    When("Enter the name of the card",()=>{
        createCard.enterCardName(cardName)
    })

    When("Click on Add button",()=>{
        createCard.clickAddCard()
    })

    Then("The new card is exist", () => {
        createCardAssertion.cardExist()
    })

    after(()=>{
        cy.get("@boardResponce").then((data)=>{
            sharedUtils.deleteBoard(data.body.id)
        })
    })

