## Puppeteer Account Creation Script
This script automates the creation of multiple accounts using Puppeteer, a Node.js library for controlling headless Chrome/Chromium.

### Usage
Install Node.js if not already installed.
Install Puppeteer by running npm install puppeteer in your terminal.
Modify the script to include your website's signup URL.
Optionally, customize the default password.
Run the script using Node.js.
### Script Overview
createAccount(username, email, password): This function launches a headless browser, navigates to the signup page, fills out the registration form with the provided username, email, and password, and submits the form. It then waits for the navigation to complete and closes the browser.

createMultipleAccounts(): This function generates unique usernames and emails for each account, then calls createAccount for each combination of username, email, and a default password. It returns a promise that resolves when all accounts have been created.

### Default Parameters
Default_Password: Change this variable to set a common password for all accounts.
#### Note
Make sure to replace 'https://your-website.com/signup' with the actual URL of your website's signup page.
Ensure that your website's signup form has appropriate fields with IDs username, email, password, and submit-button.
