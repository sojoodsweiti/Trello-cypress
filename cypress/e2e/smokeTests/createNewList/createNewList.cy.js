import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import createNewListActions from "../../../pageObjects/smokeTest/createNewList/actions.cy";
import createNewListAssertions from "../../../pageObjects/smokeTest/createNewList/assertions.cy";

const sharedAction = new sharedActions()
const sharedAssertion = new sharedAssertions()
const sharedUtils = new sharedDataUtils()
const createList = new createNewListActions()
const createListAssertion = new createNewListAssertions()
const url = "https://trello.com/u/sojoodsweiti/boards"
const boardName = "New list board"
const listName = "QA testing"

    before(() => {
        sharedAction.loginToTrello()
        sharedAssertion.checkUrlEqualValue(url)
        sharedUtils.createBoard(boardName).as('boardResponce')
    })

    Given("Navigate to the board page",()=>{
        cy.get("@boardResponce").then((data)=>{
            sharedAction.openBoard(data.body.name)
        })
    })

    When("Click on add another list button",()=>{
        cy.wait(6000)
        cy.screenshot({capture:"fullPage"})
        cy.wait(6000)
        createList.clickAnotherList()
    })

    When("Enter the title of the list",()=>{
        createList.enterListName(listName)
    })

    When("Click on add list button",()=>{
        createList.clickAddList()
    })

    Then("The new list is exist",()=>{
        createListAssertion.listExist(listName)
    })

    after(()=>{
        cy.get("@boardResponce").then((data)=>{
            sharedUtils.deleteBoard(data.body.id)
        })
    })