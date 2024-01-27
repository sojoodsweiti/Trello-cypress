class deleteCardActions{
    clickCard(){
        cy.get('[data-testid="card-name"]').click()
        return this 
    }

    clickArchive(){
        cy.get(".js-archive-card").click()
        return this 
    }

    clickDelete(){
        cy.get(".js-delete-card").click()
        return this 
    }

    clickConfirm(){
        cy.get(".js-confirm").click()
        return this 
    }
}
export default deleteCardActions