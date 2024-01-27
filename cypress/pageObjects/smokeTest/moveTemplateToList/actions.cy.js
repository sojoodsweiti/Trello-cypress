class moveTemplateActions{
    clickTemplate(){
        cy.get(".amUfYqLTZOvGsn").click()
        return this
    }

    clickMove(){
        cy.get(".js-move-card").click()
        return this
    }

    selectList(){
        cy.get(".js-select-list").select("Doing")
        return this 
    }

    ClickMoveButton(){
        cy.get('[data-testid="move-card-popover-move-button"]').click()
        return this 
    }
}
export default moveTemplateActions