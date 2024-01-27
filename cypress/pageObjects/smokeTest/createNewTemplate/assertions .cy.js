class createTemplateAssertions{
    templateCreated(){
        cy.get('[data-testid=template-card-back-banner]').should('contain', "This is a Template card.")
        return this 
    }
}
export default createTemplateAssertions