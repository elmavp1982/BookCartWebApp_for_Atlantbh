import { By, until, WebDriver } from "selenium-webdriver";

class BooksPage {
    constructor(driver) {
        /** @type {WebDriver} */
        this.driver = driver;
        this.biographyLink = By.xpath("//span[@class='mat-mdc-list-item-unscoped-content mdc-list-item__primary-text' and contains(text(),' Biography ')]");
        this.addToCartFirstBook = By.xpath("//a[contains(@href, '/books/details') and strong[text()='The Simple Wild']]/ancestor::mat-card//button");
        this.addToCartSecondBook = By.xpath("//div[@class='card-title my-2']/a/strong[text()=\"Rough Magic: Riding the World's Loneliest Horse Race\"]/ancestor::mat-card//button");  
        this.cartIcon = By.xpath("//mat-icon[contains(@class, 'mat-badge-warn') and text()='shopping_cart']");

    }

    async goToBiographyPage() {
        let biographyPage = await this.driver.wait(until.elementLocated(this.biographyLink), 5000);
        return await biographyPage.click();
    }

    async addFirstBookToCart() {
        let firstBook;
    
        // Try to find element and repeat if it becomes stale
        for (let i = 0; i < 3; i++) { 
            try {
                firstBook = await this.driver.wait(until.elementLocated(this.addToCartFirstBook), 5000);
    
                // Scroll to element
                await this.driver.executeScript("arguments[0].scrollIntoView(true);", firstBook);
    
                // Wait to element be visible
                await this.driver.wait(until.elementIsVisible(firstBook), 2000);
    
                // Click on the found element
                await firstBook.click();
                console.log("✅ Clicked the 'Add to Cart' button");
                break;  // If the click is successful, break the loop
            } catch (error) {
                if (error.name === "StaleElementReferenceError") {
                    console.log("⚠️ StaleElementReferenceError - trying again...");
                } else {
                    throw error;  // If it is a different error, report it
                }
            }
        }
    }

    async addSecondBookToCart() {
        let secondBook;
    
        // Try to find element and repeat if it becomes stale
        for (let i = 0; i < 3; i++) { 
            try {
                secondBook = await this.driver.wait(until.elementLocated(this.addToCartSecondBook), 5000);
    
                // Scroll to element
                await this.driver.executeScript("arguments[0].scrollIntoView(true);", secondBook);
    
                // Wait to element be visible
                await this.driver.wait(until.elementIsVisible(secondBook), 2000);
    
                // Click on the found element
                await secondBook.click();
                console.log("✅ Clicked the 'Add to Cart' button");
                break;  // If the click is successful, break the loop
            } catch (error) {
                if (error.name === "StaleElementReferenceError") {
                    console.log("⚠️ StaleElementReferenceError - trying again...");
                } else {
                    throw error;  // If it is a different error, report it
                }
            }
        }
    }


    async goToCart() {
        let cart = await this.driver.findElement(this.cartIcon);
        return await cart.click();
    }

}

export { BooksPage };