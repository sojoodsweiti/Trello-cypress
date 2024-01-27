class updateLiastNameAssertions{
    listNameVisible(listName){
        cy.get('[data-testid="list-name-textarea"]').should("contain", listName)
        return this
    }
}
export default updateLiastNameAssertions