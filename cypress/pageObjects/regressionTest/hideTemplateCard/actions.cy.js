class hideTemplateCardActions{
    clickTemplate(){
        cy.get(".amUfYqLTZOvGsn").click()
        return this
    }

    ClickHide(){
        cy.get(".js-archive-card").click()
        return this 
    }
}
export default hideTemplateCardActions