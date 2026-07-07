

class AddRemoveMultiple{

    constructor(page){
        this.singleProduct = page.getByRole("link", { name: "Samsung galaxy s6" });
        this.addTOCart = page.getByRole("link", { name: "Add to cart" });
        this.homeButton = page.getByRole("link", { name: "Home (current)" });
        this.doubleProduct = page.getByRole("link", { name: "Nokia lumia 1520" });
        this.addTOCart1 = page.getByRole("link", { name: "Add to cart" });
        this.cartButton = page.locator("#cartur");
        this.deleteProductNokia = page.locator(`//tr[td[contains(., 'Nokia lumia 1520')]]//a`);
        this.deleteProductSamsung = page.locator(`//tr[td[contains(., 'Samsung galaxy s6')]]//a`);
        this.cartProducts = page.locator("#tbodyid tr");
    }

    async singleProducts(){
        await this.singleProduct.click();
    }

    async addTOCarts(){
        await this.addTOCart.click();
    }

    async homeButtons(){
        await this.homeButton.click();
    }

    async doubleProducts(){
        await this.doubleProduct.click();
    }

    async addTOCart1s(){
        await this.addTOCart1.click();
    }

    async cartButtons(){
        await this.cartButton.click();
    }

    async deleteProductNokias(){
        await this.deleteProductNokia.click();
    }

    async deleteProductSamsungs(){
        await this.deleteProductSamsung.click();
    }

}

module.exports = {AddRemoveMultiple};