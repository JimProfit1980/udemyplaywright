import {test,expect} from '@playwright/test';
import HomePage from '../pages/home.page';

let homePage:HomePage;



test.beforeEach(async ({ page }) => {
     await page.goto('/');      
})


test('Verify home using text and css selector', async ({ page }) => {

    homePage = new HomePage(page);
    
    await expect(homePage.link_homePage).toBeVisible();
})
