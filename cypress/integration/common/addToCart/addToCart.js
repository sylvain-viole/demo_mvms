import { After, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url =
    "https://www.mavillemonshopping.fr/fr/bordeaux/flap-store-by-karine-1/numerique-objets-connectes/T%C3%A9l%C3%A9phone%20portable/produits/perche-selfie-trepied-bluetooth";
const cartBadge = "#cart-quantity";

Given("A visitor on a product page", () => {
    
    
    cy.visit(url);
});

And("The cart is empty", () => {
    cy.get(cartBadge).should('have.text','0')
})

When("I add a product to the cart", (value) => {
    cy.get("reference-quantity").type(value);
});

Then("I should have a product in the cart", () => {
    cy.get(cartBadge).should('have.text','1');
});

Aft
