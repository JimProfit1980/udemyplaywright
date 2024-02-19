import { FullConfig, chromium,expect } from "@playwright/test";
import AccountsPage from "../pages/accounts.page";

let accountsPage:AccountsPage;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function globalSetup(config:FullConfig){
    const browser = await chromium.launch();

    const page = await browser.newPage();
    accountsPage = new AccountsPage(page);      
    await page.goto(`https://practice.sdetunicorns.com/my-account`);
    await page.context().storageState({path:'notLoggedInState.json'});

    await accountsPage.input_username.fill("practiceuser1");
    await accountsPage.input_password.fill("PracticePass1!");
    await accountsPage.button_login.click();

    await expect(page.locator("nav[class='woocommerce-MyAccount-navigation'] li:nth-child(6) a")).toHaveText("Log out");

    //save signed-in state to 'loggedInState.json'
    await page.context().storageState({path:'loggedInState.json'});
    await browser.close();
}  

export default globalSetup;