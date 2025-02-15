# UI Test Cases for Book Cart Application

## 1. Login & Registration

### 1.1 Positive Test Cases

#### 1. Successful Login
- **Steps:** Enter valid credentials and click login.
- **Expected Result:** User is logged in and redirected to the homepage.

#### 2. Successful Registration
- **Steps:** Enter valid details and submit the form.
- **Expected Result:** Account is created, and user receives confirmation.

### 1.2 Negative Test Cases

#### 3. Login with Incorrect Password
- **Steps:** Enter valid email but incorrect password.
- **Expected Result:** Error message is displayed.

#### 4. Registration with Existing Email
- **Steps:** Try to register with an already used email.
- **Expected Result:** System prevents registration and shows an error.

---

## 2. Book Search & Filtering

### 2.1 Positive Test Cases

#### 5. Search by Book Title
- **Steps:** Enter a valid book title in the search bar.
- **Expected Result:** Matching books are displayed.

#### 6. Filter by Category
- **Steps:** Select a category from the filter options.
- **Expected Result:** Books from the selected category are shown.

### 2.2 Negative Test Cases

#### 7. Search with Invalid Input
- **Steps:** Enter random characters or symbols in the search bar.
- **Expected Result:** System displays no results or an appropriate message.

---

## 3. Shopping Cart

### 3.1 Positive Test Cases

#### 8. Add Book to Cart
- **Steps:** Select a book and click "Add to Cart".
- **Expected Result:** Book is added to the cart successfully.

#### 9. Remove Book from Cart
- **Steps:** Remove a book from the cart.
- **Expected Result:** Book is successfully removed.

### 3.2 Negative Test Cases

#### 10. Attempt to Checkout with Empty Cart
- **Steps:** Click on "Checkout" with an empty cart.
- **Expected Result:** System prevents checkout and displays an error message.

---

## 4. Checkout & Payment

### 4.1 Positive Test Cases

#### 11. Successful Purchase
- **Steps:** Proceed to checkout with valid details.
- **Expected Result:** Order is placed successfully.

### 4.2 Negative Test Cases

#### 12. Invalid Payment Details
- **Steps:** Enter incorrect or expired card details.
- **Expected Result:** Payment fails with an error message.