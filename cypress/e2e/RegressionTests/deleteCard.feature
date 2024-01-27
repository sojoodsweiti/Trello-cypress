Feature: Delete existing card functionality 

    Scenario: Verify that the user can delete a card 
        Given The user navigate to the board
        When Navigate to the card to delete it 
        And Click on Archive button
        And Click on Delete button
        And Click on confirm Delete button
        Then The card should be deleted