Feature: Check move template card to a list 
    Scenario: Verify that the user can move the template card to a list 
        Given The user navigate to the board
        When The user choose the template card
        And The user click on move button
        And The user select the list
        And The user click on move template button
        Then The template moved to the list "name"