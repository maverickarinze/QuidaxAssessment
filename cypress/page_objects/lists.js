class lists {

    elements = {
        selectListDemo: () => cy.get('#select-demo'),
        selectSingleDisplay: () => cy.get('.selected-value'),
        multiSelect1: () => cy.get('[value="California"]'),
        multiSelect2: () => cy.get('[value="Florida"]'),
        getFirstSelect: () => cy.get('#printMe'),
        getAllSelect: () => cy.get('#printAll')

    }

    selectMulti1() {
        this.elements.multiSelect1().click()
    }

    selectMulti2() {
        this.elements.multiSelect2().click()
    }

    viewFirst() {
        this.elements.getFirstSelect().click()
    }

    viewAll() {
        this.elements.getAllSelect().click()
    }
}

module.exports = new lists();