Feature: Visitor adds to cart

    I want to add a product to cart
  
  @focus
  Scenario: Add a product to cart
    Given A visitor on a product page
    And The cart is empty
    When I add aproduct to the cart
    Then I should have a product in the cart