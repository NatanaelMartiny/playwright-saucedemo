export const USERS = {
    valid: { username: 'standard_user', password: 'secret_sauce' },
    invalid: { username: 'incorrect_user', password: 'incorrect_password' },
};

export const MESSAGES = {
    invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
    emptyUsername: 'Epic sadface: Username is required',
    emptyPassword: 'Epic sadface: Password is required',
}