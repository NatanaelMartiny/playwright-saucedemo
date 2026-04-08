import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { USERS, MESSAGES } from '../data/users';

test.describe('SauceDemo - Fluxo de Login', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('login válido', async ({ page }) => {
        await loginPage.login(USERS.valid.username, USERS.valid.password);

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.getByText('Products')).toBeVisible();
    });

    test('login inválido', async () => {
        await loginPage.login(USERS.invalid.username, USERS.invalid.password);

        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain(MESSAGES.invalidCredentials);
    });

    test('login com credenciais vazias', async () => {
        await loginPage.login('', '');

        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain(MESSAGES.emptyUsername);
    });

    test('login só com username preenchido', async () => {
        await loginPage.login(USERS.valid.username, '');

        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain(MESSAGES.emptyPassword);
    });
});