import { Locator, Page } from "@playwright/test";
import UploadComponent from "./upload-component.page";


class BlogPage{
    page:Page;
    text_blogHeading:Locator;
    text_recentPosts:Locator;
    


    constructor(page:Page){
    this.page = page;
    this.text_blogHeading = page.getByRole('heading', { name: 'Blog', exact: true });
    this.text_recentPosts = page.locator("[id='recent-posts-3'] a[href]");
    }

    uploadComponent(){
        return new UploadComponent(this.page);
    }
   
}

export default BlogPage;