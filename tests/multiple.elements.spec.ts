import {test,expect} from '@playwright/test';
import { url} from '../Utilities/utilities.spec';
import BlogPage from '../pages/blog.page';
import ContactPage from '../pages/contact.page';
import HomePage from '../pages/home.page';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
await page.goto('/');
await expect(page).toHaveURL(url);    
});

test('Multiple Elements tested', async ({ page }) => {

const navLinksArray = [
    "Home","About", "Shop", "Blog","Contact","My account"];
const navLinks = page.locator("[id='zak-primary-nav'] li[id*='menu']");
expect(await navLinks.allTextContents()).toEqual(navLinksArray);
});

test('Printing out multiple links', async ({ page }) => {  
    
    const navLinksArray = [
        "Home","About", "Shop", "Blog","Contact","My account"];
    const navLinks = page.locator("[id='zak-primary-nav'] li[id*='menu']");
    for (const item of await navLinks.elementHandles()) {
        console.log(await item.textContent());            
        } 
        
        const homePage = new HomePage(page);
        
        await expect(homePage.link_home).toHaveText("Home");
        expect(navLinksArray).toHaveLength(6);
        expect(await navLinks.elementHandles()).toHaveLength(6);
    });

test("Exercise working with multiple elements, send message",async ({page})=>{
    const navLinks = page.locator("[id='zak-primary-nav'] li[id*='menu']");
    await navLinks.nth(4).click();


    //await expect(blogPage.text_contractHeading).toHaveText("Blog");  

   
    const contactPage = new ContactPage(page);
    await contactPage.submitForm(faker.name.firstName(),faker.name.lastName(),faker.internet.email(),faker.lorem.paragraph());
    await expect (contactPage.text_contactSavedMessage).toHaveText("Thanks for contacting us! We will be in touch with you shortly");
  // await expect (page.getByText('Thanks for contacting us! We will be in touch with you shortly')).toBeVisible();

});

test("Exercise working with multiple elements, Blog length per message",async ({page})=>{
    const navLinks = page.locator("[id='zak-primary-nav'] li[id*='menu']");
    await navLinks.nth(3).click();

    const blogPage = new BlogPage(page);

    await expect(blogPage.text_blogHeading).toHaveText("Blog");    

    await expect(page).toHaveURL('/blog/');

    await expect(blogPage.text_recentPosts).toHaveCount(5);
});

test("Exercise working with multiple elements, min length of blog to be 10 or more characters",async ({page})=>{
    const navLinks = page.locator("[id='zak-primary-nav'] li[id*='menu']");
    await navLinks.nth(3).click();

    const blogPage = new BlogPage(page);

    await expect(blogPage.text_blogHeading).toHaveText("Blog");   

    for (const item of await blogPage.text_recentPosts.elementHandles()) {     
      expect((await item.textContent())?.length).toBeGreaterThanOrEqual(10);
    }
});

test.afterAll(async ({page})=>{
    await page.close();
});



