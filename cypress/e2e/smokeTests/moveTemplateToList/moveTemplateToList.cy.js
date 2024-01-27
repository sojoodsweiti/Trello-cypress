import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import moveTemplateActions from "../../../pageObjects/smokeTest/moveTemplateToList/actions.cy";
import moveTemplateAssertions from "../../../pageObjects/smokeTest/moveTemplateToList/assertions.cy";

const sharedUtils = new sharedDataUtils()
const sharedAction = new sharedActions()
const sharedAssertion = new sharedAssertions()
const url = "https://trello.com/u/sojoodsweiti/boards"
const moveTemplateAction = new moveTemplateActions()
const moveTemplateAssertion = new moveTemplateAssertions()
const boardName = "QA board"
const listName = "Doing"

    before(() => {
        sharedAction.loginToTrello()
        sharedAssertion.checkUrlEqualValue(url)
        sharedUtils.createBoard(boardName).as('boardResponce')
    })
   
    Given("The user navigate to the board",()=>{
        sharedAction.openBoard(boardName)
        cy.get("@boardResponce").then((data)=>{
            sharedAction.openBoard(data.body.name)
        })
        cy.wait(6000)
        cy.get("@boardResponce").then((data)=>{
            sharedUtils.getList(data.body.id).as('listResponce')
        })         
    })

    When("The user choose the template card",()=>{
        cy.get('@listResponce').then((data)=>{
            cy.log(data)
            sharedUtils.createTemplateCard(data.body[0].id).as('cardTemplateResponce')
        })
        cy.wait(6000)
        moveTemplateAction.clickTemplate()
    })

    When("The user click on move button",()=>{
        moveTemplateAction.clickMove()
    })

    When("The user select the list",()=>{
        moveTemplateAction.selectList()
    })

    When("The user click on move template button", ()=>{
        cy.wait(5000)
        moveTemplateAction.ClickMoveButton()
    })

    Then("The template moved to the list {string}",()=>{
        moveTemplateAssertion.templateMoved(listName)
    })

    after(()=>{
        cy.get("@boardResponce").then((data)=>{
            sharedUtils.deleteBoard(data.body.id)
        })
    })


