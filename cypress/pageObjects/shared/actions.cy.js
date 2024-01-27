class sharedActions {
    loginToTrello(){
        cy.trelloLogin()
        return this
    }  
    openBoard(boardName){
        cy.get(".board-tile").contains(boardName).click()
        return this 
    }
}
export default sharedActions

