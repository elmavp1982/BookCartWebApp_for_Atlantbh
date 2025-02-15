import { Browser, Builder, WebDriver } from "selenium-webdriver";
import { expect } from "chai";
import { Login } from "../pages/login.js"
import { BooksPage } from "../pages/books.js"
import { CartPage } from "../pages/cart.js"

describe("Book Cart - Order", function () {
    /** @type {WebDriver} */
    let driver;
    /** @type {Login} */
    let loginPage;
    /** @type {Books} */
    let booksPage;
    /** @type {Cart} */
    let cartPage;

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        loginPage = new Login(driver);
        booksPage = new BooksPage(driver);
        cartPage = new CartPage(driver);
        await driver.get('https://bookcart.azurewebsites.net/');
        await driver.manage().window().maximize();
    });

    afterEach(async function () {
        //await driver.quit();
    });

    it("Test 3 - Book selection", async function () {
        
        // Click on Login button
        await loginPage.clickLogin();

        // Login with valid credentials
        await loginPage.login("UserTest123", "Admin123");

        // Go to Biography page
        await booksPage.goToBiographyPage();

        // Add first book to the Cart
        await booksPage.addFirstBookToCart();

        // Add second book to the Cart
        await booksPage.addSecondBookToCart();

        // Go to Cart
        await booksPage.goToCart();

    });

    it("Test 4 - Cart", async function () {
        
       // Verification that user is on 'Shopping cart' page
       let cartPageText = await cartPage.getCartPageTitle();
       expect(cartPageText).to.equal("Shopping cart");

       // Verification of first added book
       let firstAddedBookInCart = await cartPage.getFirstBookTitle();
       expect(firstAddedBookInCart).to.equal("The Simple Wild");

       // Verification of first second book
       let secondAddedBookInCart = await cartPage.getSecondBookTitle();
       expect(secondAddedBookInCart).to.equal("Rough Magic: Riding the World's Loneliest Horse Race");

       // Izbrisi sve iz Korpe - to cemo pokusati odraditi na kraju
       // await cartPage.clearCart();

       // Click to Checkout
       await cartPage.proceedToCheckout();

    });

    it("Test 5 - Checkout", async function () {
 
       // Verification that user is on 'Check Out' page
       let checkoutPageText = await cartPage.getCheckoutPageTitle();
       expect(checkoutPageText).to.equal("Check Out");
       // Additional check
       expect(await driver.getCurrentUrl()).to.include("/checkout");

       // Enter order details and click the PlaceOrder button
       await cartPage.order("User","Address1","Address2","123456","BiH");

       // Verification that user is on 'My Orders' page
       let myOrdersPageText = await cartPage.getMyOrderPageTitle();
       expect(myOrdersPageText).to.equal("My Orders");
     });
});