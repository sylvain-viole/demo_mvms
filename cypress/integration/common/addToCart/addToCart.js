import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url =
    "https://www.mavillemonshopping.fr/fr/bordeaux/flap-store-by-karine-1/numerique-objets-connectes/T%C3%A9l%C3%A9phone%20portable/produits/perche-selfie-trepied-bluetooth";
const cartBadge = "#cart-quantity";

Before(() => {
    cy.clearCookies();
})

Given("A visitor on a product page", () => { 
    cy.visit(url);
});

And("The cart is empty", () => {
    cy.get(cartBadge).should('have.text','0')
})

When("I add aproduct to the cart", () => {
    cy.get("#add_to_cart").click();
});

Then("I should have a product in the cart", () => {
    cy.get(cartBadge).should('have.text',"1");
});
