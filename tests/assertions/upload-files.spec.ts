import {test,expect,Page} from '@playwright/test';
//import { url} from '../../Utilities/utilities.spec';
import CartPage from '../../pages/cart.page';
import path from "path";

let page:Page;
let cartPage:CartPage;


test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();    
    page = await context.newPage();
    await page.goto('/');
    await expect(page).toHaveURL("https://practice.sdetunicorns.com/");
})


test('Upload File', async () => {
    cartPage = new CartPage(page);
    await page.locator("[class='zak-header-actions zak-header-actions--desktop'] [class='zak-header-action']").click();
    
    await expect(page).toHaveURL(/.*cart/);

    await page.locator("input#upfile_1").focus();
    const filePath = path.join(__dirname,"../../data/Automation Sales Med_RM-000817_V1.pdf");
    // upload test file
    await page.waitForLoadState("networkidle");
   
    await cartPage.uploadComponent().uploadFile(filePath);

    await expect(cartPage.uploadComponent().text_successfulUploadMessage).toContainText("uploaded successfully");
});

test.afterAll(async () => {
   // utiltiesPage = new utilities();
   /// await page.locator("").click();
   await page.close();
})







