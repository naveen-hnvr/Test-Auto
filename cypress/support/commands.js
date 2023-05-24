// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cy-verify-downloads').addCustomCommand();

Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/admin"]').click()
  })
})
Cypress.Commands.add('accdamic_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/academics"]').click()
  })
})
Cypress.Commands.add('connect_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/connect"]').click()
  })
})
Cypress.Commands.add('vault_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/vault"]').click()
  })
})
Cypress.Commands.add('fee_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/fees"]').click()
  })
})
Cypress.Commands.add('library_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/library"]').click()
  })
})
  Cypress.Commands.add('receipt_login', (username, password) => {
    cy.session([username, password], () => {
      cy.visit('/')
      cy.get('input[placeholder="Email"]').type(username)
      cy.get('#password').type(password)
      cy.get('input[type="submit"]').click()
      cy.get('a[href="/library"]').click()
    })
})
Cypress.Commands.add('assets_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/assets"]').click()
  })
})
Cypress.Commands.add('lms_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/lms"]').click()
  })
})
Cypress.Commands.add('admission_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/admissions"]').click()
  })
})
Cypress.Commands.add('tt_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ttPlanner"]').click()
  })
})
Cypress.Commands.add('hr_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/hr"]').click()
  })
})
Cypress.Commands.add('rc_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/regulatoryCompliance"]').click()
  })
})