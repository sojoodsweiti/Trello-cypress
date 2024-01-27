class updateListNameActions{
    updateListName(index, listName) {
        cy.get(".XmUgdJ5MepKUCB").eq(index).clear({force: true}).type(listName)
        return this
    }
}
export default updateListNameActions