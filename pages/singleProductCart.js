
class SingleProduct{

    constructor(page){
        this.singleProduct = page.getByRole("link", { name: "Samsung galaxy s6" });
        this.addTOCart = page.getByRole("link", { name: "Add to cart" });
        this.cartButton = page.locator("#cartur");
        this.productText = page.getByText("Samsung galaxy s6", { exact: true });
        this.priceText =  page.locator('td:has-text("360")');
    }

    async productAdd(){
        await this.singleProduct.click();
        await this.addTOCart.click();
        await this.cartButton.click();
    }

    async getProductName(){
        return await this.productText.textContent();
    }

    async getPriceText(){
        return await this.priceText.textContent();
    }


}

module.exports = {SingleProduct};