import { Locator, Page } from "@playwright/test";

class HomePage{
    page: Page;
    getStartedBtn:Locator;   
    baseURL:string;    
    homePageTitle:string;
    navLinks: Locator;
    searchIcon: Locator;
    link_homePage: Locator;
    text_LandingPage: Locator;
    link_myAccount: Locator;
    link_home: Locator;
    link_about: Locator;
    link_shop: Locator;
    link_blog: Locator;
    link_contact: Locator;
    shoppingCart: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.getStartedBtn = page.locator("#get-started");
        this.baseURL = "https://practice.sdetunicorns.com";
        this.homePageTitle = "Practice E-Commerce Site – SDET Unicorns";
        this.link_homePage = page.locator("#zak-primary-menu >> text='Home'");
        this.navLinks = page.locator("#primary-menu li[id!=menu]'");
        this.link_home = page.locator("nav[id='zak-primary-nav'] li:nth-child(1)");
        this.link_about = page.locator("nav[id='zak-primary-nav'] li:nth-child(2)");
        this.link_shop = page.locator("nav[id='zak-primary-nav'] li:nth-child(3)");
        this.link_blog = page.locator("nav[id='zak-primary-nav'] li:nth-child(4)");
        this.link_contact = page.locator("nav[id='zak-primary-nav'] li:nth-child(5)");      
        this.link_myAccount = page.locator("nav[id='zak-primary-nav'] li:nth-child(6)");
        this.shoppingCart = page.getByRole('link', { name: '0', exact: true });
       
        
        this.searchIcon = page.locator("#primary-menu:has-text('Home')");
        this.text_LandingPage = page.locator("text=Think different. Make different.");
    }

    getNavLink(navlink:NavLinks){
    return navlink;
    }
}

type NavLinks = "Home" | "About" | "Shop" | "Blog" | "Contact" | "My account";

export default HomePage;