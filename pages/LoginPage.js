export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password')
        this.LoginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async login(username, password) {
        if (username) await this.usernameInput.fill(username);
        if (password) await this.passwordInput.fill(password);
        await this.LoginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
}
