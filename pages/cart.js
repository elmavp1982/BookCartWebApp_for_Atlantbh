import { By, until, WebDriver } from "selenium-webdriver";

class CartPage {
    constructor(driver) {
        /** @type {WebDriver} */
        this.driver = driver;
        this.cartPageTitle = By.xpath("//mat-card-title[contains(text(), 'Shopping cart')]");  
        this.firstBookTitle = By.xpath("//a[text()='The Simple Wild']");
        this.secondBookTitle = By.xpath("//a[contains(text(), 'Rough Magic') and contains(text(), 'Horse Race')]");
        this.checkoutButton = By.xpath("//button[@_ngcontent-ng-c1856196941]//span[contains(text(), 'CheckOut')]");
        this.checkOutPageTitle = By.xpath("//mat-card-title[contains(text(), 'Check Out')]"); 
        this.firstNameField = By.css("div.mat-mdc-form-field-infix input[placeholder='Name']");
        this.AdressLine1Field = By.css("input[placeholder='Address Line 1']");
        this.AdressLine2Field = By.css("input[placeholder='Address Line 2']");
        this.pinCodeField = By.css("input[placeholder='Pincode']");
        this.stateField = By.css("input[placeholder='State']");
        this.placeOrderButton = By.xpath("//span[contains(text(),'Place Order')]");
        this.myOrderPageTitle = By.xpath("//mat-card-title[contains(text(),'My Orders')]"); 
    }

    async getCartPageTitle() {
        let cartPageText = await this.driver.wait(until.elementLocated(this.cartPageTitle), 5000);
        return await cartPageText.getText();
    }

    async getFirstBookTitle() {
        let firstBookText = await this.driver.wait(until.elementLocated(this.firstBookTitle), 5000);
        return await firstBookText.getText();
    }

    async getSecondBookTitle() {
        let secondBookText = await this.driver.wait(until.elementLocated(this.secondBookTitle), 5000);
        return await secondBookText.getText();
    }
    
    async proceedToCheckout() {
        let checkout = await this.driver.wait(until.elementLocated(this.checkoutButton), 5000);
        await this.driver.findElement(this.checkoutButton).click();
    }

    async getCheckoutPageTitle() {
        let checkoutPageText = await this.driver.wait(until.elementLocated(this.checkOutPageTitle), 5000);
        return await checkoutPageText.getText();
    }

    async inputFirstName(name) {
        let nameField = await this.driver.wait(until.elementLocated(this.firstNameField), 5000);
        await nameField.click();
        await nameField.clear();
        await nameField.sendKeys(name);
    }

    async inputAddress1(address1) {
        let addr1 = await this.driver.wait(until.elementLocated(this.AdressLine1Field), 5000);
        await addr1.click();
        await addr1.clear();
        await addr1.sendKeys(address1);
    }

    async inputAddress2(address2) {
        let addr2 = await this.driver.wait(until.elementLocated(this.AdressLine2Field), 5000);
        await addr2.click();
        await addr2.clear();
        await addr2.sendKeys(address2);
    }

    async inputPinCode(pincode) {
        let pinCode = await this.driver.wait(until.elementLocated(this.pinCodeField), 5000);
        await pinCode.click();
        await pinCode.clear();
        await pinCode.sendKeys(pincode);
    }

    async inputState(state) {
        let stateText = await this.driver.wait(until.elementLocated(this.stateField), 5000);
        await stateText.click();
        await stateText.clear();
        await stateText.sendKeys(state);
    }

    async proceedToPlaceOrder() {
        let placeOrder = await this.driver.findElement(this.placeOrderButton);
        await placeOrder.click();
    }

    async order(firstname,address1,address2,pincode,state) {
        await this.inputFirstName(firstname);
        await this.inputAddress1(address1);
        await this.inputAddress2(address2);
        await this.inputPinCode(pincode);
        await this.inputState(state);
        await this.proceedToPlaceOrder();
    }

    async getMyOrderPageTitle() {
        let myOrders = await this.driver.wait(until.elementLocated(this.myOrderPageTitle), 5000);
        return await myOrders.getText();
    }

}

export { CartPage } ;