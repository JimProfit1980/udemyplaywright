const url = "https://practice.sdetunicorns.com";



class utilities{
    getNavLink(navLinks:NavLinks){
        return navLinks;
    }
}

export default{
    url,
    utilities
} 

type NavLinks = "Home" | "About" | "Shop" | "Blog"| "Contact" | "My account" ;

