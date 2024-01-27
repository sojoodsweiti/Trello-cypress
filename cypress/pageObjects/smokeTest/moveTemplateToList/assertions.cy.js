class moveTemplateAssertions{
    templateMoved(listName){
        cy.get(".js-open-move-from-header").should("contain",listName)
        return this 
    }
}
export default moveTemplateAssertions