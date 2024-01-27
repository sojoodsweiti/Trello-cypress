class updateTemplateNameAssertions{
    updatedName(templateName){
        cy.get(".amUfYqLTZOvGsn > a").should("contain",templateName);
        return this 
    }
}
export default updateTemplateNameAssertions