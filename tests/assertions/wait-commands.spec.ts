import {test,expect,Page} from '@playwright/test';
import { url } from '../../Utilities/utilities.spec';
import path from "path";

let page:Page;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();    
    page = await context.newPage();
    await page.goto(url);
    await expect(page).toHaveURL("https://practice.sdetunicorns.com/");
})


test('Upload File', async () => {
    await page.locator("[class='zak-header-actions zak-header-actions--desktop'] [class='zak-header-action']").click();
    
    await expect(page).toHaveURL(/.*cart/);

    await page.locator("input#upfile_1").focus();
    const filePath = path.join(__dirname,"../../data/video.mp4");
    // upload test file
    await page.waitForLoadState("networkidle");
    await page.setInputFiles('input#upfile_1', filePath);

    await page.locator('input#upload_1').click({delay:1000});

    await expect(page.locator("#wfu_messageblock_header_1_1")).toContainText("uploaded successfully",{timeout:10000});

     

});

test.afterAll(async () => { 
   await page.close();
})







