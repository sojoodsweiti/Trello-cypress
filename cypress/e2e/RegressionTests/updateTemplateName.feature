Feature: Check update template name functionality 
    Scenario: Verify that the user can update the name of the template 
        Given The user navigate to the board
        When The user click on edit button
        And update the template "name"
        Then The template name updated

