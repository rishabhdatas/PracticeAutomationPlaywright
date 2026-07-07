

class SignUp{
    constructor(page){
        this.signUpButton = page.locator("//a[@id='signin2']");
        this.userName = page.getByRole("textbox", { name: "Username:" });
        this.password = page.getByRole("textbox", { name: "Password:" });
        this.signUp = page.getByRole("button", { name: "Sign up" });
    }

    // async createUserButton(){
    //     await this.signUpButton.click();
    // }
    async signUpPage(username, password){
        await this.signUpButton.click();
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signUp.click();
    }
}

module.exports = {SignUp}