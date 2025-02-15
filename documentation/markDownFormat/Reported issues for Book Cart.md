# Reported Issues

## Bug #1

### Bug title
**Infinite Loading on "Generate Book Plot"**

### Description
Clicking the "Generate Book Plot" button on the book details page for book ID 34 results in an infinite loading animation. The book plot summary is never displayed.

### Steps to reproduce
1. Navigate to [Book Details Page](https://bookcart.azurewebsites.net/books/details/34) in a web browser.
2. Locate the "Generate Book Plot" button.
3. Click the "Generate Book Plot" button.

### Actual behavior
The loading animation continues indefinitely. The book plot summary is never displayed.

### Expected result
After clicking the "Generate Book Plot" button, the application should generate and display a summary of the book's plot. The loading animation should disappear once the summary is loaded.

**Severity:** Medium  
**Priority:** Medium
**Module:** Book Details  
**Environment:**  
- Browser: Chrome (Latest Version)  
- Operating System: Windows 10  
- Device: Desktop  

---

## Bug #2

### Bug title
**Search Functionality - Enter Key Redirects to Home Page Instead of Search Results**

### Description
When performing a book search by entering a title in the search field and pressing the Enter key, the application unexpectedly redirects to the home page instead of displaying the search results.

### Steps to reproduce
1. Navigate to the [Book Cart home page](https://bookcart.azurewebsites.net/).
2. Locate the search field.
3. Enter a book title (e.g., "The Help") in the search field.
4. Press the Enter key.

### Actual behavior
The application redirects to the home page instead of displaying the search results.

### Expected result
The application should display a page with search results for the entered book title.

**Severity:** Medium  
**Priority:** Medium
**Module:** Search Functionality  
**Environment:**  
- Browser: Chrome (Latest Version)  
- Operating System: Windows 10  
- Device: Desktop  

---

## Bug #3

### Bug title
**Search Functionality - "No Books Found" Message Flashes and Redirects to Home Page**

### Description
When performing a book search by entering a non-existent book title in the search field and pressing the Enter key, the application briefly displays a "No books found" message but then immediately redirects to the home page. This behavior makes it difficult for the user to understand the search results and potentially refine their query.

### Steps to reproduce
1. Navigate to the [Book Cart home page](https://bookcart.azurewebsites.net/).
2. Locate the search field.
3. Enter a non-existent book title (e.g., "Blabla") in the search field.
4. Press the Enter key.

### Actual behavior
The application briefly displays a "No books found" message but then immediately redirects to the home page.

### Expected result
The application should display a page with a clear message indicating that no books were found for the entered query. The user should remain on the search results page to refine their search or try a different query.

**Severity:** Medium  
**Priority:** High
**Module:** Search Functionality  
**Environment:**  
- Browser: Chrome (Latest Version)  
- Operating System: Windows 10  
- Device: Desktop  
 
---

## Bug #4

### Bug title
**Login Functionality - No Error Message for Invalid Credentials**

### Description
When attempting to log in with an invalid username and password, the application does not display any error message. Furthermore, upon redirecting to the home page, the browser prompts the user to save credentials, despite a failed login attempt. This behavior is confusing and potentially exposes a security vulnerability.

### Steps to reproduce
1. Navigate to the [Book Cart login page](https://bookcart.azurewebsites.net/login).
2. Enter a non-existent username and password.
3. Click the "Login" button.
4. Observe the lack of error message.
5. Click on the "Book Cart" link (or any other navigation element to go to the Home Page).
6. Observe the browser prompt to save credentials.

### Actual behavior
The application does not display any error message after submitting invalid credentials. Upon redirecting to the home page, the browser prompts the user to save credentials.

### Expected result
Upon submitting invalid credentials, the application should:
- Display a clear error message indicating that the username or password is incorrect.
- Not prompt the user to save credentials.
- Keep the user on the login page until valid credentials are provided.

**Severity:** High  
**Priority:** Medium
**Module:** User Authentication   
**Environment:**  
- Browser: Chrome (Latest Version)  
- Operating System: Windows 10  
- Device: Desktop  
 
---

## Bug #5

### Bug title
**Login Functionality - No Error Message for Empty Fields**

### Description
When attempting to log in with both username and password fields left empty, the application does not display any error messages indicating that the fields are required. The fields are highlighted in red, but no further information is provided to the user.

### Steps to reproduce
1. Navigate to the [Book Cart login page](https://bookcart.azurewebsites.net/login).
2. Leave both username and password fields empty.
3. Click the "Login" button.

### Actual behavior
The required fields (username and password) are highlighted in red. No error messages are displayed. The login attempt fails silently.

### Expected result
The application should:
- Display clear error messages next to each empty required field (username and password), indicating that the fields cannot be blank.
- Prevent the login from proceeding until all required fields are filled.

**Severity:** Medium  
**Priority:** Medium
**Module:** User Authentication   
**Environment:**  
- Browser: Chrome (Latest Version)  
- Operating System: Windows 10  
- Device: Desktop  

---

## Bug #6

### Bug title
**Checkout Functionality - No Error Message for Empty Fields**

### Description
When attempting to place an order on the checkout page with all required fields left empty, the application does not display any error messages indicating that the fields are required. The fields are highlighted in red, but no further information is provided to the user.

### Steps to reproduce
1. Navigate to the [Book Cart checkout page](https://bookcart.azurewebsites.net/checkout).
2. Leave all required fields empty.
3. Click the "Place Order" button.

### Actual behavior
The required fields are highlighted in red. No error messages are displayed. It's unclear if the order has been placed.

### Expected result
The application should:
- Display clear error messages next to each empty required field, indicating that the field cannot be blank.
- Prevent the order from being placed until all required fields are filled.

**Severity:** Medium  
**Priority:** Medium
**Module:** Checkout Functionality  
**Environment:**  
- Browser: Chrome (Latest Version)  
- Operating System: Windows 10  
- Device: Desktop  

