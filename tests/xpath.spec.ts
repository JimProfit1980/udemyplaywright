import {test,expect} from '@playwright/test';
import {url} from '../Utilities/utilities.spec';

test.beforeEach(async ({ page }) => {
    await page.goto(url);
});

test("xpath selector",async ({page})=>{
 await expect(page.locator("//ul[@id='zak-primary-menu']//a[text()='Home']")).toBeVisible();
});
