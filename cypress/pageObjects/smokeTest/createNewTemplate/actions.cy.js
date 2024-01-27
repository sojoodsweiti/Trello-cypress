class createTemplateActions{
    createForm(){
       cy.get('[data-testid="card-template-list-button"]').first().click()
       return this 
    }

    newTemplate(){
        cy.get('[data-testid="create-new-template-card-button"]').click()
        return this 
    }

    templateTitle(templateTitle){
        cy.get('[data-testid="create-template-card-composer"]').type(templateTitle)
        return this 
    }

    clickAdd(){
        cy.get('[data-testid="new-template-card-submit-button"]').click()
        return this 
    }
}
export default createTemplateActions