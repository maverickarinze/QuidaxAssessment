class inputForm {

    elements = {
        singleMessagebox: () => cy.get('#user-message'),
        showMsgBtn: () => cy.get('#get-input > .btn'),
        checkMsg: () => cy.get('#display'),
        multiFormOne: () => cy.get('#value1'),
        multiFormTwo: () => cy.get('#value2'),
        totalBtn: () => cy.get('#gettotal > .btn'),
        checkValue: () => cy.get('#displayvalue'),
    }

    typeSingleMessage(message) {
        this.elements.singleMessagebox().type(message)
    }

    clickShowMessage(){
        this.elements.showMsgBtn().click()
    }

    typeMultiMessage1(value1) {
        this.elements.multiFormOne().type(value1)
    }

    typeMultiMessage2(value2) {
        this.elements.multiFormTwo().type(value2)
    }

    clickGetTotal(){
        this.elements.totalBtn().click()
    }

}

module.exports = new inputForm();