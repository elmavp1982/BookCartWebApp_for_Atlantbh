import { By, until, WebDriver } from "selenium-webdriver";

class Login {
    constructor(driver) {
        /** @type {WebDriver} */
        this.driver = driver;
        this.loginLink = By.xpath("//span[@class='mdc-button__label' and contains(text(),'Login')]"); 
        this.usernameField = By.css("input[placeholder='Username']"); 
        this.passwordField = By.css("input[placeholder='Password']"); 
        this.loginButton = By.xpath("//mat-card-actions//button[span[text()='Login']]"); 
        this.usernameCheck = By.xpath("//div[@_ngcontent-ng-c1652302024]//span[contains(text(), 'UserTest123')]"); 
        this.usernameLink = By.xpath("//div[@_ngcontent-ng-c1652302024]//span[contains(text(), 'UserTest123')]");
        this.logoutButton = By.xpath("//button[@_ngcontent-ng-c1652302024]//span[contains(text(), 'Logout')]");
        this.loginLink = By.xpath("//span[@class='mdc-button__label' and contains(text(),'Login')]");
        this.loginPageTitle = By.xpath("//mat-card-title[contains(text(),'Login')]");
    }

    async clickLogin() {
        let button = await this.driver.wait(until.elementLocated(this.loginLink), 5000)
        await button.click();
    }    

    async fillInUsernameField(username) {
        let usernameField = await this.driver.wait(until.elementLocated(this.usernameField), 10000);
        await this.driver.wait(until.elementIsVisible(usernameField));
        await usernameField.click();
        await usernameField.clear();
        await usernameField.sendKeys(username);
    }

    async fillInPasswordField(password) {
        let passwordField = this.driver.findElement(this.passwordField);
        await passwordField.click();
        await passwordField.clear();
        await passwordField.sendKeys(password);
    }

    async submitLoginForm() {
        let loginButton = this.driver.findElement(this.loginButton);
        await loginButton.click();
    }

    async login(username, password) {
        await this.fillInUsernameField(username);
        await this.fillInPasswordField(password);
        await this.submitLoginForm();
    }

    async login(username, password) {
        await this.fillInUsernameField(username);
        await this.fillInPasswordField(password);
        await this.submitLoginForm();
    }

    async getUsernameCheck() {
        let usernameText = await this.driver.wait(until.elementLocated(this.usernameCheck), 5000);
        return await usernameText.getText();
    }

    async goToUser() {
        let userLink = await this.driver.wait(until.elementLocated(this.usernameLink), 5000);
        return await userLink.click();
    }

    async goToLogout() {
        let logout = await this.driver.wait(until.elementLocated(this.logoutButton), 5000);
        return await logout.click();
    }

    async getLoginPageTitle() {
        let loginPageText = await this.driver.wait(until.elementLocated(this.loginPageTitle), 5000);
        return await loginPageText.getText();
    }

}

export { Login };