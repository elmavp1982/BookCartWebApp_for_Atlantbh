# API Smoke Tests

## Smoke Tests (API)

### Login API with valid credentials
- `POST /api/User/Login` – Check if the user can successfully authenticate.

### Retrieve book list
- `GET /api/Book?search=title` – Check if the book search API returns the expected results.

### Add book to cart
- `POST /api/Cart` – Check if the API for adding a book to the cart works successfully.

### Checkout with valid details
- `GET /api/Cart` – Check if the API for viewing the cart returns the correct data.
