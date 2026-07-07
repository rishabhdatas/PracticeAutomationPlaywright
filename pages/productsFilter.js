
class ProductFilter{
    constructor(page){
        this.allProducts = page.locator("div.card.h-100");
        this.phonesCard = page.getByRole("link", { name: "Phones" });
        this.laptopsCard = page.getByRole("link", { name: "Laptops" });
        this.monitorsCard = page.getByRole('link', { name: 'Monitors' });

    }

    async phoneCards(){
        await this.phonesCard.click();
    }

    async laptopsCards(){
        await this.laptopsCard.click();
    }

    async monitorsCards(){
        await this.monitorsCard.click();
    }
}

module.exports = {ProductFilter};