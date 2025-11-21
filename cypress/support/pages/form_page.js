/// <reference types="cypress" />

export default {
    clickConfirm () {
        cy.get('#btn_confirm').click()
    },
    
    checkErrorMessage () {
        const messages = [
            'O nome é obrigatório',
            'O sobrenome é obrigatório.',
            'O email é obrigatório',
            'A descricao é obrigatória.',
            'Escolha uma rede social.',
            'Selecionar uma rede social é obrigatório',
            'Selecionar uma linguagem de programacao é obrigatório',
            'Selecionar uma ou mais linguagem de programacao é obrigatório.']

        messages.forEach(msg => {
            cy.contains(msg).should('be.visible')
        })
    },

    fillName (name) {
        cy.get('#id_campo_nome').type(name)
    },

    fillLastName(lastname) {
        cy.get('#id_campo_sobrenome').type(lastname)
    },

    fillEmail(email) {
        cy.get('#id_campo_email').type(email)
    },

    fillDescription(description) {
        cy.get('#id_campo_descricao').type(description)
    },

    selectSocialMedia(socialMedia) {
        cy.contains(socialMedia).click()
    },

    selectProgrammingLanguage(language) {
        cy.get('#id_campo_linguagemProgramacaoSimples').select(language) 
    },

    selectAnotherProgrammingLanguage(language) {
        cy.get('#mui-component-select-linguagemProgramacao').click() 
        cy.contains('li', language).click()
    },

    selectThirdProgrammingLanguage(language) {
        cy.get('[data-testid="id_campo_multiplaSelecao"]').click()
        cy.contains('li', language).click()

    },

    checkTools(tool) {
        cy.contains(tool).click()
    },

    uploadFile(fileName) {
        cy.get('#id_file').selectFile('cypress/fixtures/' + fileName)
    },

    checkSuccessMessage() {
        cy.contains('Dados enviados com sucesso. Clique no botão RESETAR para reiniciar o formulário.').should('be.visible')     
        
    },

    clickReset() {
        cy.get('#btn_reset').click()
    },

    checkReset() {
        cy.get('#id_campo_nome').should('have.value', '')
        cy.get('#id_campo_sobrenome').should('have.value', '')
        cy.get('#id_campo_email').should('have.value', '')
        cy.get('#id_campo_descricao').should('have.value', '')
    }

} 

