class home {

    elements = {
        inputDropdown: () => cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle'),
        simpleFormClick: () => cy.get('.open > .dropdown-menu > :nth-child(1) > a'),
        alertDropdown: () => cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle'),
        alertPage: () => cy.get('.open > .dropdown-menu > :nth-child(1) > a'),
        modalPage: () => cy.get('.open > .dropdown-menu > :nth-child(2) > a')
    }

    openFormPage() {
        this.elements.inputDropdown().click()
        this.elements.simpleFormClick().click()
    }

    openAlertPage() {
        this.elements.alertDropdown().click()
        this.elements.alertPage().click()
    }

    openModalPage() {
        this.elements.alertDropdown().click()
        this.elements.modalPage().click()
    }
}


module.exports = new home();

