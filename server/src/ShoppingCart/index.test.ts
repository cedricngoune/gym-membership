import { Cart, Shopping } from ".";

/**
 * TESTS LIST
  ------------

  - The total should be 0 when the basket is empty
  - The total should be a unit price when its a single item in basket
  - the total should be unit price * quantity * discount of single item
  - The total should be total of price * quantity * discount for many items
 */

describe("Shppoing cart total", () => {
  it("should return 0 when the cart is empty", () => {
    const shoppingCart: Cart[] = [];

    const shopping = new Shopping();
    const total = shopping.totalize(shoppingCart);
    expect(total).toBe(0.0);
  });
});
