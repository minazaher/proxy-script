const puppeteer = require('puppeteer');

const Default_Password = "Default-Password"

function createAccount(username, email, password) {
    return puppeteer.launch()
        .then(browser => browser.newPage()
            .then(page => {
                return page.goto('https://your-website.com/signup')
                    .then(() => page.type('#username', username))
                    .then(() => page.type('#email', email))
                    .then(() => page.type('#password', password))
                    .then(() => page.click('#submit-button'))
                    .then(() => page.waitForNavigation())
                    .then(() => browser.close());
            }));
}

function createMultipleAccounts() {
    const accounts = [];

    for (let i = 0; i < 1000; i++) {
        const username = `username${i}`;
        const email = `username${i}@your-domain.com`;
        accounts.push(createAccount(username, email, Default_Password));
    }

    return Promise.all(accounts);
}

createMultipleAccounts()
    .then(() => console.log('All accounts created successfully.'))
    .catch(err => console.error('Error creating accounts:', err));
