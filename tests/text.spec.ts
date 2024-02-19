import {test,expect} from '@playwright/test';
import HomePage from '../pages/home.page';


test.beforeEach(async ({page}) => {
await page.goto('/');    
});

test("Using text selectors", async ({page})=>{
    const homePage = new HomePage(page);  
    await  expect(homePage.text_LandingPage).toBeVisible();
});
