import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import hideTemplateCardActions from "../../../pageObjects/regressionTest/hideTemplateCard/actions.cy";
import hideTemplateCardAssertions from "../../../pageObjects/regressionTest/hideTemplateCard/assertions.cy";

const sharedUtils = new sharedDataUtils()
const sharedAction = new sharedActions()
const sharedAssertion = new sharedAssertions()
const hideTemplateAction = new hideTemplateCardActions()
const hideTempalteAssertion = new hideTemplateCardAssertions()
const url = "https://trello.com/u/sojoodsweiti/boards"
const boardName = "QA board"

    before(() => {
        sharedAction.loginToTrello()
        sharedAssertion.checkUrlEqualValue(url)
        sharedUtils.createBoard(boardName).as('boardResponce')
    })

    Given("The user navigate to the board",()=>{
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
        hideTemplateAction.clickTemplate()
    })

    When("Click on hide from list button",()=>{
        hideTemplateAction.ClickHide()
    })

    Then("The template should be hidden",()=>{
        hideTempalteAssertion.cardHidden()
    })

    after(()=>{
        cy.get("@boardResponce").then((data)=>{
            sharedUtils.deleteBoard(data.body.id)
        })
    })