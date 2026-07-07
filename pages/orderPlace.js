class OrderPlace {
  constructor(page) {
    this.singleProduct = page.getByRole("link", { name: "Samsung galaxy s6" });
    this.addTOCart = page.getByRole("link", { name: "Add to cart" });
    this.cartButton = page.locator("#cartur");
    this.productName = page.getByText("Samsung galaxy s6", { exact: true });
    this.productPrice = page.locator("td", { hasText: "360" });
    this.placeOrder = page.getByRole("button", { name: "Place Order" });
    this.name = page.locator("//input[@id='name']");
    this.country = page.getByRole("textbox", { name: "Country:" });
    this.city = page.getByRole("textbox", { name: "City:" });
    this.creditCard = page.getByRole("textbox", { name: "Credit card:" });
    this.month = page.getByRole("textbox", { name: "Month:" });
    this.year = page.getByRole("textbox", { name: "Year:" });
    this.purchase = page.getByRole("button", { name: "Purchase" });
    this.confirmMessage = page.getByRole("heading", {
      name: "Thank you for your purchase!",
    });
    this.confirmText = page.locator("p.lead.text-muted");
    this.confirmOkButton = page.getByRole("button", { name: "OK" });
  }

  async productClick() {
    await this.singleProduct.click();
  }

  async addProduct() {
    await this.addTOCart.click();
  }

  async cardButton() {
    await this.cartButton.click();
    await this.productName.waitFor({
      state: "visible",
      timeout: 10000,
    });
  }

  async placingOrder() {
    await this.placeOrder.click();
  }

  async userDetails(
    username,
    usercountry,
    usercity,
    usercreditCard,
    purchasemonth,
    purchaseyear,
  ) {
    await this.name.fill(username);
    await this.country.fill(usercountry);
    await this.city.fill(usercity);
    await this.creditCard.fill(usercreditCard);
    await this.month.fill(purchasemonth);
    await this.year.fill(purchaseyear);
  }

  async purchaseLink() {
    await this.purchase.click();
  }

  async confirmOkButtonLink() {
    await this.confirmOkButton.click();
  }
}

module.exports = { OrderPlace };
