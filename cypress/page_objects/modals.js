class modals {

    elements = {
        openSingleModal: () => cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]'),
        checkSingleOpen: () => cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-header > .modal-title'),
        checkSingleClosed: () => cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-heading'),
        closeSingleModal: () => cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]'),
        openMultiModal: () => cy.get('[href="#myModal"]'),
        checkMulti1Open: () => cy.get('#myModal > .modal-dialog > .modal-content > .modal-header > .modal-title'),
        openMultiModal2: () => cy.get('.modal-body > .btn'),
        checkMulti2Open: () => cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header > .modal-title'),
        closeMultiModal1: () => cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]'),
        closeMultiModal2: () => cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]'),
        checkMultiClosed: () => cy.get(':nth-child(3) > .col-md-4 > .panel > .panel-heading')
    }

    openSingle() {
        this.elements.openSingleModal().click()
    }

    closeSingle() {
        this.elements.closeSingleModal().click()
    }

    openModal1() {
        this.elements.openMultiModal().click()
    }

    openModal2() {
        this.elements.openMultiModal2().click()
    }

    closeModal1() {
        this.elements.closeMultiModal1().click()
    }

    closeModal2() {
        this.elements.closeMultiModal2().click()
    }
}


module.exports = new modals();