class deleteCardAssertions{
    cardDeleted(cardURL){
        cy.url().should("not.eq",cardURL);
        return this 
    }
}
export default deleteCardAssertions