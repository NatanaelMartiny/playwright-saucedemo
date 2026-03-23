import { test, expect } from '@playwright/test';

const URL = 'https://saucedemo.com';

const USERS = {
    valid: { username : 'stardad_user', password: 'secret_sauce' },
    invalid: { username: 'incorrect_user', password: 'incorrect_password' },
};

const MESSAGES = {
    invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
    emptyUsername: 'Epic sadface: Username is required',
}

test.describe('SauceDemo - Fluxo de Login', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('login válido', async ({ page }) => {
        await page.getByPlaceholder('Username').fill(USERS.valid.username);
        await page.getByPlaceholder('Password').fill(USERS.invalid.password);
        await page.getByRole('button' , { name: 'Login'}).click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.getByText('Products')).toBeVisible();
    
    });

    test('login invalido', async({ page }) => {
        await page.getByPlaceholder('Username').fill(USERS.invalid.username);
        await page.getByPlaceholder('Password').fill(USERS.invalid.password);
        await page.getByRole('button' , { name: 'Login'}).click();
        await expect(page.getByText(MESSAGES.invalidCredentials)).toBeVisible();
        
    });

    test('login com credencias vazias', async ({ page }) => {
        await page.getByRole('button' , { name: 'Login'}).click();
        await expect(page.getByText(MESSAGES.emptyUsername)).toBeVisible();
        await page.pause();
    });
});