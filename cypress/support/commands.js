
   Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {

        cy.get('#firstName').type('Thiago')
        cy.get('#lastName').type('Fragoso')
        cy.get('#email').type('email@email.com')
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()
   })

