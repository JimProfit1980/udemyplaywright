import { Page } from "@playwright/test";
import UploadComponent from "./upload-component.page";


class CartPage{
    page:Page;
    constructor(page:Page){
    this.page = page;
    }

    uploadComponent(){
        return new UploadComponent(this.page);
    }
   
}

export default CartPage;