class sharedAssertions{
    checkUrlEqualValue(url){
        cy.url().should("eq",url);
        return this;
    }
}
export default sharedAssertions