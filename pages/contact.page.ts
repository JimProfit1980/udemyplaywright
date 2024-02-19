import { Locator, Page } from "@playwright/test";
import UploadComponent from "./upload-component.page";


class ContactPage{
    page:Page;
    text_contactSavedMessage:Locator
    constructor(page:Page){
    this.page = page;
    this.text_contactSavedMessage = page.getByText('Thanks for contacting us! We will be in touch with you shortly');
    }

    async submitForm(firstName:string,lastName:string,phoneNumber:string,message:string){
        await this.page.getByLabel('Name *').click();
        await this.page.getByLabel('Name *').fill(firstName);
        await this.page.getByLabel('Name *').press('Tab');
        await this.page.getByLabel('Email *').fill(lastName);
        await this.page.getByLabel('Email *').press('Tab');
        await this.page.getByLabel('Phone *').fill(phoneNumber);
        await this.page.getByLabel('Message').click();
        await this.page.getByLabel('Message').fill(message);
        await this.page.getByLabel('Message').press('Tab');
        await this.page.getByRole('button', { name: 'Submit' }).click();

    }

    uploadComponent(){
        return new UploadComponent(this.page);
    }   
}

export default ContactPage;