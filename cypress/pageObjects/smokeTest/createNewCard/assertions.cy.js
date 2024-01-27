class createNewCardAssertions{
    cardExist(cardName){
        cy.get('[data-testid="card-name"]').should("contain",cardName)
        return this
    }
}
export default createNewCardAssertions