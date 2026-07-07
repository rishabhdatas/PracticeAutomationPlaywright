
class AddAndRemove{

    constructor(page){
        this.singleProduct = page.getByRole("link", { name: "Samsung galaxy s6" });
        this.addTOCart = page.getByRole("link", { name: "Add to cart" });;
        this.cartButton = page.locator("#cartur");
        this.deleteProduct = page.getByRole("link", { name: "Delete" });
        this.cartProducts = page.locator("#tbodyid tr");
    }

    async productClick(){
        await this.singleProduct.click();
    }

    async addCart(){
        await this.addTOCart.click();
    }

    async cartButtons(){
        await this.cartButton.click();
    }

    async deleteProducts(){
        await this.deleteProduct.click();
    }

}

module.exports = {AddAndRemove};