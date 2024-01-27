Feature: check create template functionality

    Scenario: Verify that the user can create a new template card 
            Given Navigate the board page
            When Click on create form template 
            And Click on create a new template
            And Write the template title 
            And Click on Add button
            Then The template is created 
