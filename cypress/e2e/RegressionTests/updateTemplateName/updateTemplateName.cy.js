import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";
import updateTemplateNameActions from "../../../pageObjects/regressionTest/updateTemplateName/actions.cy";
import updateTemplateNameAssertions from "../../../pageObjects/regressionTest/updateTemplateName/assertions.cy";

const sharedUtils = new sharedDataUtils()
const sharedAction = new sharedActions()
const sharedAssertion = new sharedAssertions()
const updateTemplateName = new updateTemplateNameActions()
const updateTemplateAssertion = new updateTemplateNameAssertions()
const url = "https://trello.com/u/sojoodsweiti/boards"
const boardName = "QA board"
const templateName = "new template testing card"

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

    When("The user click on edit button",()=>{
        cy.get('@listResponce').then((data)=>{
            cy.log(data)
            sharedUtils.createTemplateCard(data.body[0].id).as('cardTemplateResponce')
        })
        cy.wait(6000)
        updateTemplateName.clickTemplate()
    })

    When("update the template {string}",()=>{
        cy.wait(6000)
        updateTemplateName.updateTemplateName(templateName)
    })

    Then("The template name updated",()=>{
        cy.wait(6000)
        updateTemplateAssertion.updatedName(templateName)
    })

    after(()=>{
        cy.get("@boardResponce").then((data)=>{
            sharedUtils.deleteBoard(data.body.id)
        })
    })