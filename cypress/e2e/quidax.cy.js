import home from "../page_objects/home"
import inputForm from "../page_objects/inputForm"
import alerts from "../page_objects/alerts"
import modals from "../page_objects/modals"

describe('Quidax Assessment', () => {
  beforeEach(() => {
    cy.visit("https://demo.seleniumeasy.com/")
    
  })

  it('Should show single message', () => {
    home.openFormPage();
    inputForm.typeSingleMessage('Hello World!');
    inputForm.clickShowMessage();

    //Verify message is displayed
    inputForm.elements.checkMsg().should('be.visible')
  })

  it('Should calculate multiple values', () => {
    home.openFormPage();
    inputForm.typeMultiMessage1('2');
    inputForm.typeMultiMessage2('5');
    inputForm.clickGetTotal();

    //Verify output is displayed
    inputForm.elements.checkValue().should('be.visible')
    
  })

  it('Should open single modal', () => {
    home.openModalPage()
    modals.openSingle();
    
    //Verify Single Modal is Opened
    modals.elements.checkSingleOpen().contains('Modal Title')
    .should('be.visible')
  })

  it('Should close single modal', () => {
    home.openModalPage()
    modals.openSingle();
    
    //Verify Single Modal is Opened
    modals.elements.checkSingleOpen().contains('Modal Title')
    .should('be.visible')

    //Close Single Modal
    modals.closeSingle()

    //Verify that Modal is Closed
    modals.elements.checkSingleClosed().contains('Single Modal Example')
    .should('be.visible')
  })

  it('Should open multi modal', () => {
    home.openModalPage()
    modals.openModal1()
    
    //Verify first Modal is Opened
    modals.elements.checkMulti1Open().contains('First Modal')
    .should('be.visible')

    //Open Modal 2
    modals.openModal2()

    //Verify that Modal 2 is Opened
    modals.elements.checkMulti2Open().contains('Modal 2')
    .should('be.visible')

  })

  it('Should Close multi modal', () => {
    home.openModalPage()
    modals.openModal1()
    
    //Verify first Modal is Opened
    modals.elements.checkMulti1Open().contains('First Modal')
    .should('be.visible')

    //Open Modal 2
    modals.openModal2()

    //Verify that Modal 2 is Opened
    modals.elements.checkMulti2Open().contains('Modal 2')
    .should('be.visible')

    //Close Multi Modal
    modals.closeModal2()
    modals.closeModal1()

    //Verify that modal is closed
    modals.elements.checkMultiClosed().contains('Multiple Modal Example')
    .should('be.visible')

  })

  it('Should open an Autocloseable Success Alert', () => {
    home.openAlertPage()
    alerts.clickAutoSuccess()
    
    //Verify Auto Success Message is displayed
    alerts.elements.autoCloseableSuccessMsg().contains("I'm an autocloseable success message. I will hide in 5 seconds.")
    .should('be.visible')
    
  })

  it('Should open a Normal Success Alert', () => {
    home.openAlertPage()
    alerts.clickNormalSuccess()
    
    //Verify Auto Success Message is displayed
    alerts.elements.normalSuccessMsg().contains("I'm a normal success message. To close use the appropriate button.")
    
  })

})