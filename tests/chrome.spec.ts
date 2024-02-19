import {test,expect} from '@playwright/test';
import HomePage from '../pages/home.page';

let homePage:HomePage;

test.describe('Home Page Tests', async() => {
    test.beforeEach(async ({ page }) => {   
        homePage = new HomePage(page);      
        await page.goto('/');
    });
    

    test('Validating Home Page Navigation', async ({page}) => { 
        homePage = new HomePage(page);      
        await expect(page).toHaveTitle(homePage.homePageTitle);    
        await expect(page).toHaveURL(homePage.baseURL);    
    }); 

    test('Click Get Started Button',async ({page})=>{
        homePage = new HomePage(page);
     await homePage.getStartedBtn.click();     
     await expect(page).toHaveURL(/.*#get-started/);
    });

});    

    test('Navigating to the About page and getting title',async({page})=>{
        homePage = new HomePage(page);
        await page.goto(`/about`);
        await expect(page).toHaveTitle(`About – Practice E-Commerce Site`);
        await expect(page).toHaveURL(`${homePage.baseURL}/about/`);
    }); 

    test('Verify Heading Text', async ({page})=>{  
    await page.reload(); 
    await page.goto('/');
    
    expect(await page.getByText("Think different. Make different.").textContent()).toContain("Think different. Make different.");
    });  

test.afterEach(async ({page}) => {
    await page.close();
});
