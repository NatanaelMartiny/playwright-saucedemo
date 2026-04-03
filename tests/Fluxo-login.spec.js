import { test, expect } from '@playwright/test';

const URL = 'https://www.saucedemo.com';

const USERS = {
    valid: { username: 'standard_user', password: 'secret_sauce' },
    invalid: { username: 'incorrect_user', password: 'incorrect_password' },
};

const MESSAGES = {
    invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
    emptyUsername: 'Epic sadface: Username is required',
    emptyPassword: 'Epic sadface: Password is required',
};

test.describe('SauceDemo - Fluxo de Login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('login válido', async ({ page }) => {
        await page.getByPlaceholder('Username').fill(USERS.valid.username);
        await page.getByPlaceholder('Password').fill(USERS.valid.password); // ✅ corrigido
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.getByText('Products')).toBeVisible();
    });

    test('login inválido', async ({ page }) => {
        await page.getByPlaceholder('Username').fill(USERS.invalid.username);
        await page.getByPlaceholder('Password').fill(USERS.invalid.password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText(MESSAGES.invalidCredentials)).toBeVisible();
    });

    test('login com credenciais vazias', async ({ page }) => {
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText(MESSAGES.emptyUsername)).toBeVisible();
    });

    test('login só com username preenchido', async ({ page }) => {
        await page.getByPlaceholder('Username').fill(USERS.valid.username);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText(MESSAGES.emptyPassword)).toBeVisible();
    });
});