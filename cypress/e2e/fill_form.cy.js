/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import form_page from '../support/pages/form_page';

describe('Formulário de Teste', () => {
    beforeEach('Acessar o formulário', () => {
        home_page.clickStart()
    })

    it('Validar submissão vazia ', () => {
        form_page.clickConfirm()
        form_page.checkErrorMessage()

    })

    it('Validar formato de e-mail inválido', () => {
        form_page.fillName(faker.person.fullName())
        form_page.fillLastName(faker.person.lastName())
        form_page.fillEmail(faker.person.middleName())
        form_page.fillDescription("Testing method to learn")
        form_page.selectSocialMedia('Youtube')
        form_page.selectProgrammingLanguage('PYTHON')
        form_page.selectAnotherProgrammingLanguage('Javascript')
        form_page.selectThirdProgrammingLanguage('C#')
        form_page.checkTools('Cypress')
        form_page.checkTools('Selenium')
        form_page.uploadFile('example.json')
        form_page.clickConfirm()
        cy.contains('O Email digitado é invalido.').should('be.visible')


    })

    it('Campo ferramenta de Checkbox Vazio', () => {
        form_page.fillName(faker.person.fullName())
        form_page.fillLastName(faker.person.lastName())
        form_page.fillEmail('bruno@gmail.com')
        form_page.fillDescription("Testing method to learn")
        form_page.selectSocialMedia('Linkedin')
        form_page.selectProgrammingLanguage('JAVASCRIPT')
        form_page.selectAnotherProgrammingLanguage('Python')
        form_page.selectThirdProgrammingLanguage('C#')
        form_page.uploadFile('example.json')
        form_page.clickConfirm()
        form_page.checkSuccessMessage()
    })

    it('Campo Envio de arquivo vazio', () => {
        form_page.fillName(faker.person.fullName())
        form_page.fillLastName(faker.person.lastName())
        form_page.fillEmail('bruno@gmail.com')
        form_page.fillDescription("Testing method to learn")
        form_page.selectSocialMedia('Linkedin')
        form_page.selectProgrammingLanguage('JAVASCRIPT')
        form_page.selectAnotherProgrammingLanguage('Python')
        form_page.selectThirdProgrammingLanguage('C#')
        form_page.checkTools('Cypress')
        form_page.checkTools('Selenium')
        form_page.clickConfirm()
        form_page.checkSuccessMessage()
    })


    it('deve limpar todos os campos ao clicar no botão Resetar', () => {
        form_page.fillName(faker.person.fullName())
        form_page.fillLastName(faker.person.lastName())
        form_page.fillEmail('bruno@gmail.com')
        form_page.fillDescription("Testing method to learn")
        form_page.clickReset()
        form_page.checkReset()



    })

    it('deve enviar o formulário com sucesso ao preencher todos os dados', () => {
        form_page.fillName(faker.person.fullName())
        form_page.fillLastName(faker.person.lastName())
        form_page.fillEmail('bruno@gmail.com')
        form_page.fillDescription("Testing method to learn")
        form_page.selectSocialMedia('Linkedin')
        form_page.selectProgrammingLanguage('JAVASCRIPT')
        form_page.selectAnotherProgrammingLanguage('Python')
        form_page.selectThirdProgrammingLanguage('C#')
        form_page.checkTools('Cypress')
        form_page.checkTools('Selenium')
        form_page.uploadFile('example.json')
        form_page.clickConfirm()
        form_page.checkSuccessMessage()
    })

    
})

