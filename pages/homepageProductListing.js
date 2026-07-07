const { expect } = require ("@playwright/test");

 class ProductListing{
    constructor(page){
        this.page = page;
        this.logo = page.locator("//a[@id='nava']//img");
        this.contact = page.getByRole("link", { name: "Contact" });
        this.aboutUs = page.getByRole("link", { name: "About us" });
        this.cart = page.getByRole("link", { name: "Cart" });
        this.login = page.getByRole("link", { name: "Log in" });
        this.signUp = page.getByRole("link", { name: "Sign up" });
        this.phones = page.getByRole("link", { name: "Phones" });
        this.laptops = page.getByRole("link", { name: "Laptops" });
        this.monitors = page.getByRole("link", { name: "Monitors" });
        this.productCards = page.locator("div.card.h-100");
    }

    async verifyProductDetails(){
        const productCount = await this.productCards.count();

         for (let i = 0; i < productCount; i++) {
            const product = this.productCards.nth(i);
        
            await expect(product.locator("img.card-img-top.img-fluid")).toBeVisible();
            await expect(product.locator("h4.card-title")).toBeVisible();
            await expect(product.locator("h5:visible")).toBeVisible();
            await expect(product.locator("p.card-text")).toBeVisible();
          }
    }
}

module.exports = { ProductListing };

