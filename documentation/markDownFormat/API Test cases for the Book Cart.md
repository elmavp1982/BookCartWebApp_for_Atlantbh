# API Test Cases for Book Cart Application

## 1. User Authentication

### 1.1 Positive Test Cases

#### 1. Successful Login
- **Request:** `POST /api/auth/login`
- **Payload:** Valid email and password
- **Expected Response:** `200 OK`, user token returned

#### 2. Successful Registration
- **Request:** `POST /api/auth/register`
- **Payload:** Valid user details
- **Expected Response:** `201 Created`, user registered

### 1.2 Negative Test Cases

#### 3. Login with Incorrect Password
- **Request:** `POST /api/auth/login`
- **Payload:** Valid email, incorrect password
- **Expected Response:** `401 Unauthorized`, error message

#### 4. Register with Existing Email
- **Request:** `POST /api/auth/register`
- **Payload:** Email already in use
- **Expected Response:** `409 Conflict`, error message

---

## 2. Book Management

### 2.1 Positive Test Cases

#### 5. Retrieve All Books
- **Request:** `GET /api/books`
- **Expected Response:** `200 OK`, list of books

#### 6. Search Book by Title
- **Request:** `GET /api/books?title=Example`
- **Expected Response:** `200 OK`, matching books returned

### 2.2 Negative Test Cases

#### 7. Search for Non-Existent Book
- **Request:** `GET /api/books?title=NonExistent`
- **Expected Response:** `404 Not Found`, empty result

---

## 3. Shopping Cart

### 3.1 Positive Test Cases

#### 8. Add Book to Cart
- **Request:** `POST /api/cart`
- **Payload:** Book ID
- **Expected Response:** `200 OK`, book added

#### 9. Retrieve Cart Items
- **Request:** `GET /api/cart`
- **Expected Response:** `200 OK`, list of cart items

### 3.2 Negative Test Cases

#### 10. Add Invalid Book ID to Cart
- **Request:** `POST /api/cart`
- **Payload:** Invalid book ID
- **Expected Response:** `400 Bad Request`, error message

---

## 4. Order Processing

### 4.1 Positive Test Cases

#### 11. Successful Checkout
- **Request:** `POST /api/orders`
- **Payload:** Valid payment details and cart items
- **Expected Response:** `201 Created`, order confirmed

### 4.2 Negative Test Cases

#### 12. Checkout with Empty Cart
- **Request:** `POST /api/orders`
- **Payload:** Empty cart
- **Expected Response:** `400 Bad Request`, error message
