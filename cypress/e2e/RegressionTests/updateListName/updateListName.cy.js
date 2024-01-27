import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";
import updateListNameActions from "../../../pageObjects/regressionTest/updateListName/actions.cy";
import updateLiastNameAssertions from "../../../pageObjects/regressionTest/updateListName/assertions.cy";

const sharedUtils = new sharedDataUtils()
const sharedAction = new sharedActions()
const sharedAssertion = new sharedAssertions()
const updateListAction = new updateListNameActions()
const updateListAssertion = new updateLiastNameAssertions()
const url = "https://trello.com/u/sojoodsweiti/boards"
const boardName = "Update list"
const listName = ['New Name for TO DO', 'New Name for Doing', 'New Name for DONE'];

    before(() => {
        sharedAction.loginToTrello()
        sharedAssertion.checkUrlEqualValue(url)
        sharedUtils.createBoard(boardName).as('boardResponce')
    })

    Given("The user navigates to the board",()=>{
        cy.get("@boardResponce").then((data)=>{
            sharedAction.openBoard(data.body.name)
        })
    })

    When("The user enters a new {string} and presses the Enter key",()=>{
        cy.wait(4000)
        for (let i = 0; i < listName.length; i++) {    
        updateListAction.updateListName(i,listName[i])}
    })

    Then("The updated name should be visible on the board",()=>{
        cy.wait(4000)
        for (let i = 0; i < listName.length; i++) {
            updateListAssertion.listNameVisible(listName[i])
        }
    })

    after(()=>{
        cy.get("@boardResponce").then((data)=>{
            sharedUtils.deleteBoard(data.body.id)
        })
    })