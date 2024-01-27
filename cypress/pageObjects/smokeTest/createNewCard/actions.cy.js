class createNewCardAcctions{
    clickNewCard(){
        cy.get('[data-testid=list-add-card-button]').first().click()
            return this 
    }

    enterCardName(cardName){
        cy.get('[data-testid="list-card-composer-textarea"]').type(cardName)
        return this 
    }

    clickAddCard(){
        cy.get('[data-testid="list-card-composer-add-card-button"]').click()
        return this 
    }
}    
export default createNewCardAcctions