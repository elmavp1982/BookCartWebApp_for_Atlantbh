import { Browser, Builder, WebDriver } from "selenium-webdriver";
import { expect } from "chai";
import { Login } from "../pages/login.js"


describe("Login and Logout Tests", function () {
  /** @type {WebDriver} */
  let driver;
  /** @type {Login} */
  let loginPage;

  beforeEach(async function () {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    loginPage = new Login(driver);
    await driver.get('https://bookcart.azurewebsites.net/');
    await driver.manage().window().maximize();

    // Login user with valid crednetials
    await loginPage.clickLogin();
    await loginPage.login("UserTest123", "Admin123");
  });

  afterEach(async function () {
    await driver.quit();
  });

  it('Test 1 - Verification for successfull login', async function () {
    
    // Verification for successfull login
    let usernameText = await loginPage.getUsernameCheck();
    expect(usernameText).to.equal("UserTest123");

});

it('Test 2 - Logout user', async function () {

  // Click on User
  await loginPage.goToUser();

  // Click on Logout
  await loginPage.goToLogout();

  // Verification that user is on Login page
  let loginPageText = await loginPage.getLoginPageTitle();
  expect(loginPageText).to.equal("Login");

});

});