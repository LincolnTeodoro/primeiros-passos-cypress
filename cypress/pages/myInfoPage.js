class MyInfoPage {
  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: '.oxd-input',
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: '.--close',
      submitButton: "[type='submit']",
      genericComboBox: '.oxd-select-text--arrow',
      secondItemComboBox: '.oxd-select-dropdown > :nth-child(6)',
      thirdItemComboBox: '.oxd-select-dropdown > :nth-child(3)',
    }
    return selectors
  }
  fillPersonaDetails(firstName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
  }

  fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate) {
    cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
    cy.get(this.selectorsList().genericField)
      .eq(6)
      .clear()
      .type(driversLicenseNumber)
    cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate)
    cy.get(this.selectorsList().dateCloseButton).click({ force: true })
  }

  saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  }

  fillStatus() {
    cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true })
    cy.get(this.selectorsList().secondItemComboBox).click({ force: true })
    cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true })
    cy.get(this.selectorsList().thirdItemComboBox).click({ force: true })
  }
}
export default MyInfoPage
