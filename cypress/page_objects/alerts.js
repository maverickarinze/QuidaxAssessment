class alerts {

    elements = {
        autoCloseableSuccess: () => cy.get('#autoclosable-btn-success'),
        autoCloseableSuccessMsg: () => cy.get('.alert-autocloseable-success'),
        normalSuccess: () => cy.get('#autoclosable-btn-success'),
        normalSuccessMsg: () => cy.get('.alert-normal-success'),
        autoCloseableWarning: () => cy.get('#autoclosable-btn-success'),
        autoCloseableWarningMsg: () => cy.get('.alert-autocloseable-warning'),
        normalWarning: () => cy.get('#normal-btn-warning'),
        normalWarningMsg: () => cy.get('.alert-normal-warning'),
        autoCloseableDanger: () => cy.get('#autoclosable-btn-danger'),
        autoCloseableDangerMsg: () => cy.get('.alert-autocloseable-danger'),
        normalDanger: () => cy.get('#normal-btn-danger'),
        normalDangerMsg: () => cy.get('.alert-normal-danger'),
        autoCloseableInfo: () => cy.get('#autoclosable-btn-info'),
        autoCloseableInfoMsg: () => cy.get('.alert-autocloseable-info'),
        normalInfo: () => cy.get('#normal-btn-info'),
        normalInfoMsg: () => cy.get('.alert-normal-info')
     }

     clickAutoSuccess(){
        this.elements.autoCloseableSuccess().click()
     }

     clickNormalSuccess() {
        this.elements.normalSuccess().click()
     }

     clickAutoWarning() {
        this.elements.autoCloseableWarning().click()
     }

     clickNormalWarning() {
        this.elements.normalWarning().click()
     }

     clickAutoDanger() {
        this.elements.autoCloseableDanger().click()
     }

     clickNormalDanger() {
        this.elements.normalDanger().click()
     }

     clickAutoInfo() {
        this.elements.autoCloseableInfo().click()
     }

     clickNormalInfo() {
        this.elements.normalInfo().click()
     }
}

module.exports = new alerts();