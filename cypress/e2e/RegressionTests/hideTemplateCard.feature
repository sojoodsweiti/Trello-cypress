Feature: Check hide template card functionality
    Scenario: Verify that the user can hide the template card from a list 
        Given The user navigate to the board
        When The user choose the template card
        And Click on hide from list button
        Then The template should be hidden 