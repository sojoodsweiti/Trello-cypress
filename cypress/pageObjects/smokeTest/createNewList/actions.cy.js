class createNewListActions{
    openBoard(boardName){
        cy.get(".board-tile").contains(boardName).click()
        return this 
    }
    clickAnotherList(){
        cy.get('[data-testid=list-composer-button]').click()
        return this 
    }
    enterListName(listName){
        cy.get('.vVqwaYKVgTygrk [data-testid="list-name-textarea"]').type(listName)
        return this 
    }
    clickAddList(){
        cy.get('[data-testid="list-composer-add-list-button"]').click()
        return this 
    }
}
export default createNewListActions