import { Locator, Page } from "@playwright/test";

class AccountsPage{
    page: Page;   
    button_login:Locator;
    input_username:Locator;
    input_password:Locator; 
    link_orders: Locator;
    link_downloads:Locator;
    text_login:Locator;
    text_register:Locator;
    shoppingCart: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.button_login = page.locator("[value='Log in']");
        this.input_username = page.locator("#username");
        this.input_password = page.locator("#password");
        this.link_orders = page.locator(`li a[href*='orders']`); 
        this.link_downloads = page.locator(`li a[href*='downloads']`);
        this.text_login = page.locator("[class='u-column1 col-1'] h2");
        this.text_register = page.locator("[class='u-column2 col-2'] h2");     
    } 
    }

export default AccountsPage;