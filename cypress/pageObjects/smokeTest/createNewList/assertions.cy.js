class createNewListAssertions{
    listExist(listName){
        cy.get('[data-testid="list-name"]').eq(3).should("contain",listName)
        return this 
    }
}
export default createNewListAssertions