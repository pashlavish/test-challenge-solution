
// Load test data
const testData = require('../../fixtures/test_data.json');

describe('Access Permissions Tests', () => {
  // to test Admin Access
  it('Admin has correct access permissions', () => {
    cy.login(testData.admin);
    // steps will go here verify Admin access permissions
  });

  // to test Brand Admin Access
  it('Brand Admin has correct access permissions', () => {
    cy.login(testData.brandAdmin);
    // steps will go here verify Brand Admin access permissions
  });

  //to test User Access
  it('User has correct access permissions', () => {
    cy.login(testData.user);
    // steps will go here verify User access permissions
  });

  // to test Invalid User Access
  it('Invalid User has no access permissions', () => {
    cy.login(testData.invalidUser);
    //steps will go here verify invalid user has no access permissions
  });

  //More tests for Brands and Product Lists

});

