

class LogoutPage {
    constructor(page){
        this.page = page;
        this.loginLink = page.locator("#login2");
        this.loginName = page.locator("#loginusername");
        this.loginPassword = page.locator("#loginpassword");
        this.loginButton = page.getByRole("button", { name: "Log in" });
        this.logoutButton = page.getByRole('link', { name: 'Log out' });
        
    }

    async login(username, password){
        await this.loginLink.click(); 
        await this.loginName.fill(username);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }

    async logout(){
        await this.logoutButton.click();
    }

}

module.exports = { LogoutPage };