Feature: Check create new list functionality

    Scenario: Verify that the user can create a new list in a board 
        Given Navigate to the board page
        When Click on add another list button
        And Enter the title of the list
        And Click on add list button
        Then The new list is exist 