import { test, expect,Page } from '@playwright/test';
import HomePage from '../pages/home.page';


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/.*Playwright/);
});

test('get started link', async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto('/');

  await expect(homePage.getStartedBtn).toHaveText("get started");

  await homePage.getStartedBtn.click();

    // Expects page to have a heading with the name of Installation.
  await expect(page.getByText("Zakra Invites You To Build Your Next Site")).toBeVisible();
  await expect(page).toHaveURL(/.*#get-started/);
});

test("NavLinks", async ({ page }) => {

  const homePage = new HomePage(page);
  await page.goto('/');
  
  await expect(homePage.link_home).toHaveText(homePage.getNavLink("Home"))
  await expect(homePage.link_shop).toHaveText(homePage.getNavLink("Shop"));
  await expect(homePage.link_blog).toHaveText(homePage.getNavLink("Blog"));
  await expect(homePage.link_contact).toHaveText(homePage.getNavLink("Contact"));
  await expect(homePage.link_about).toHaveText(homePage.getNavLink("About"));
  await expect(homePage.link_myAccount).toHaveText(homePage.getNavLink("My account"));
})


test.beforeAll(async () => {
  
});

