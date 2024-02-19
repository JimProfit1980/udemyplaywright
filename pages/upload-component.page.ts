import { Locator, Page } from "@playwright/test";


class UploadComponent{
    page:Page;
    input_uploadFileDisplayed: Locator;
    input_inputFile: Locator;
    text_successfulUploadMessage: Locator;
    btn_submit:Locator;
    constructor(page:Page){
    this.page = page;
    this.text_successfulUploadMessage = page.locator("#wfu_messageblock_header_1_1");
    this.btn_submit = page.locator('input#upload_1');
   }

  async uploadFile(filePath:string){
    await this.page.setInputFiles('input#upfile_1', filePath);

    await this.btn_submit.click({delay:1000});
  }
   
}

export default UploadComponent;