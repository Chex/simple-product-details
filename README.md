# Requirements

- A web page is provided based on the design prototype.
- Responsive web design.
- A customer can add a product with selected options (size) to a cart.
    - When the page is first loaded there is no size selected.
    - Successfully adding a product to the cart will populate this sized product in the mini cart section.
    - Clicking Add to Cart without the size option selected will show an error message.
    - There should only be one row for each product size selected within the mini cart. Quantities will be updated as the product is added multiple times.
    - Add to Cart button on hover colour changes, apply a 0.2-second transition to animate this.
- A customer can view a mini-cart of their selections.
- Product information will be consumed from the Product API: HTTP GET https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product