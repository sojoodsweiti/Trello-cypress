import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import createTemplateActions from "../../../pageObjects/smokeTest/createNewTemplate/actions.cy";
import createTemplateAssertions from "../../../pageObjects/smokeTest/createNewTemplate/assertions .cy";

const sharedAction = new sharedActions()
const sharedAssertion = new sharedAssertions()
const sharedUtils = new sharedDataUtils()
const createTemplate = new createTemplateActions()
const templateAssertion = new createTemplateAssertions()
const url = "https://trello.com/u/sojoodsweiti/boards"
const boardName = "New testing board"
const templateTitle = "QA Template card."

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

    When("Click on create form template",()=>{
        cy.wait(6000)
        createTemplate.createForm()
    })

    When("Click on create a new template",()=>{
        createTemplate.newTemplate()
    })

    When("Write the template title",()=>{
        createTemplate.templateTitle(templateTitle)
    })

    When("Click on Add button",()=>{
        createTemplate.clickAdd()
    })

    Then("The template is created",()=>{
        cy.wait(6000)
        templateAssertion.templateCreated()
    }) 

    after(()=>{
        cy.get("@boardResponce").then((data)=>{
            sharedUtils.deleteBoard(data.body.id)
        })
    })