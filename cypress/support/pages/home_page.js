/// <reference types="cypress" />

export default {
    clickStart () {
        cy.visit('/')
            .get('.MuiBox-root')
        
        cy.get('.MuiButton-label')
            .click()
    }
}    