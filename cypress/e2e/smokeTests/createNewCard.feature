Feature: check create new card functionality

    Scenario: Verify that the user can create a new card 
            Given Navigate the board page
            When Click on add a card button
            And Enter the name of the card
            And Click on Add button
            Then The new card is exist
