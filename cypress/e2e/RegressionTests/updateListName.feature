Feature: Update the list name

   Scenario: Verify that the user can update of List Name on the Board
    Given The user navigates to the board
    When The user enters a new "name" and presses the Enter key
    Then The updated name should be visible on the board
