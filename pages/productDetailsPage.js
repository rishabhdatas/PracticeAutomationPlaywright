

class ProductDetails{
    constructor(page){
        this.page = page;
        this.productLink = page.getByRole("link", { name: "Samsung galaxy s6" });
        this.productName = page.getByRole("heading", { name: "Samsung galaxy s6" });
        this.productImage = page.locator("//div[@class='item active']//img");
        this.productPriceText = page.getByRole("heading", { name: "$360 *includes tax" });
        this.productDescription = page.locator("#more-information");
        this.addToCartButton = page.getByRole("link", { name: "Add to cart" });
    }

    async openProduct(){
        await this.productLink.click();
    }

}

module.exports = {ProductDetails};