class updateTemplateNameActions{
    clickTemplate(){
        cy.get(".amUfYqLTZOvGsn").click()
        return this
    }

    updateTemplateName(templateName){
        cy.get(".js-card-detail-title-input").clear().type(templateName)
        cy.wait(3000)
        cy.get(".dialog-close-button").click()
        return this 
    }
}
export default updateTemplateNameActions