import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy"
import sharedAssertions from "../../../pageObjects/shared/assertions.cy"
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy"
import deleteCardActions from "../../../pageObjects/regressionTest/deleteCard/actions.cy";
import deleteCardAssertions from "../../../pageObjects/regressionTest/deleteCard/assertions.cy";

const sharedAction = new sharedActions()
const sharedAssertion = new sharedAssertions()
const sharedUtils = new sharedDataUtils()
const deleteAction = new deleteCardActions()
const deleteAssertion = new deleteCardAssertions()
const url = "https://trello.com/u/sojoodsweiti/boards"
const cardURL = "https://trello.com/c/PYK8cOV8/1-new-card"
const boardName = "New testing board" 

    before(() => {
        sharedAction.loginToTrello()
        sharedAssertion.checkUrlEqualValue(url)
        sharedUtils.createBoard(boardName).as('boardResponce')
    })

    Given ("The user navigate to the board",()=>{
        cy.get("@boardResponce").then((data)=>{
            sharedAction.openBoard(data.body.name)
        })
        cy.get("@boardResponce").then((data)=>{
            sharedUtils.getList(data.body.id).as('listResponce')
        })
               
    })

    When("Navigate to the card to delete it", ()=>{
        cy.wait(6000)
        cy.get('@listResponce').then((data)=>{
            cy.log(data)
            sharedUtils.createCard(data.body[0].id).as('cardResponce')
            cy.wait(5000)
        }) 
        deleteAction.clickCard()
    })

    When("Click on Archive button", ()=>{
        cy.wait(6000)
        deleteAction.clickArchive()
    })

    
    When("Click on Delete button", ()=>{
        cy.wait(6000)
        deleteAction.clickDelete()
    })

    When("Click on confirm Delete button", ()=>{
        deleteAction.clickConfirm()
    })

    Then("The card should be deleted",()=>{
        cy.wait(6000)
        deleteAssertion.cardDeleted(cardURL)
    })

    after(()=>{
        cy.get("@boardResponce").then((data)=>{
            sharedUtils.deleteBoard(data.body.id)
        })
    })




