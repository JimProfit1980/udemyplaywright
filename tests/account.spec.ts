import {test,expect} from '@playwright/test';
import AccountsPage from '../pages/accounts.page';

let accountsPage:AccountsPage;

 test.describe('My Account', async() => {
//     test.beforeAll(async ({ browser }) => { 
//         page = await browser.newPage();
//         accountsPage = new AccountsPage(page);      
//         await page.goto('/my-account');

//         await accountsPage.input_username.fill("practiceuser1");
//         await accountsPage.input_password.fill("PracticePass1!");
//         await accountsPage.button_login.click();

//         await expect(page.locator("nav[class='woocommerce-MyAccount-navigation'] li:nth-child(6) a")).toHaveText("Log out");
//     }); 

    test('Access Orders', async ({page}) => {  
    await page.goto('/my-account');
    accountsPage = new AccountsPage(page);     
    await accountsPage.link_orders.click();  

    await expect(page).toHaveURL(/.orders/);    
    }); 

    test('Access downloads',async ({page})=>{  
    await page.goto('/my-account');
    accountsPage = new AccountsPage(page);       
    await accountsPage.link_downloads.click();    

    await expect(page).toHaveURL(/.downloads/);
    });
});    

test.describe('Validate Login Process', () => {

    test.use({storageState:'notLoggedInState.json'});

    test.beforeEach(async ({ page }) => {
        await page.goto('/my-account');
    });
    
    test('Validate User On Landing Page', async ({ page }) => { 
    accountsPage = new AccountsPage(page);

    await expect(accountsPage.text_login).toHaveText("Login");
    await expect(accountsPage.text_register).toHaveText("Register");

        
    })
    
    
});


test.afterEach(async ({page}) => {
    await page.close();
});
