# Vondera API Documentation

This document outlines the API integration used in the Vondera Clothing Brand E-commerce storefront. The application interacts with the Vondera Public API to manage products, categories, and shopping carts.

## Base Configuration

- **Base URL**: `https://us-central1-brands-61c3d.cloudfunctions.net/app-api/api/public`
- **Authentication**: Required via `x-api-key` header.
- **Session Management**: Requires a `userid` header for cart persistence.

### Required Headers

| Header | Description | Required |
| :--- | :--- | :--- |
| `Content-Type` | Must be `application/json` | Yes |
| `x-api-key` | Your Vondera Public API Key | Yes |
| `userid` | Unique ID for the current user/session | Yes |

---

## 🏗️ Store API

### Fetch Store Information
Retrieves general store settings, social links, and theme configurations.

- **Endpoint**: `GET /store/`
- **Payload**: None
- **Response**: `VonderaStore` object.

---

## 👕 Products API

### Fetch Products (Paginated)
Retrieves a list of products with support for pagination and category filtering.

- **Endpoint**: `GET /products`
- **Query Parameters**:
  - `pageNo` (number): Page number (default: 1).
  - `limit` (number): Items per page (default: 12).
  - `category` (string, optional): Filter products by Category ID.
- **Payload**: None
- **Response**: 
  ```json
  {
    "items": VonderaProduct[],
    "isLastPage": boolean,
    "nextPageNumber": number | null,
    "currentPage": number,
    "totalPages": number
  }
  ```

### Fetch Single Product
Retrieves detailed information about a specific product.

- **Endpoint**: `GET /products/single/:id`
- **Payload**: None
- **Response**: `VonderaProduct` object.

---

## 📂 Categories API

### Fetch All Categories
Retrieves the list of product categories available in the store.

- **Endpoint**: `GET /category`
- **Payload**: None
- **Response**: `VonderaCategory[]`

### Fetch Single Category
Retrieves details for a specific category.

- **Endpoint**: `GET /category/single/:id`
- **Payload**: None
- **Response**: `VonderaCategory` object.

---

## 🛒 Cart API

The Cart API relies on the `userid` header to identify and persist the user's shopping cart.

### Fetch Cart
Retrieves the current state of the user's cart.

- **Endpoint**: `GET /cart`
- **Payload**: None
- **Response**: `VonderaCart` object.

### Add to Cart
Adds a product (or specific variant) to the cart.

- **Endpoint**: `POST /cart`
- **Payload**:
  ```json
  {
    "productId": "string",
    "variantId": "string | null",
    "quantity": number
  }
  ```
- **Response**: `{ status: number, message: string, data: any }`

### Update Cart Quantity
Updates the quantity of an item already in the cart.

- **Endpoint**: `PUT /cart`
- **Payload**:
  ```json
  {
    "productId": "string",
    "variantId": "string | null",
    "quantity": number
  }
  ```
- **Response**: `{ status: number, message: string, data: any }`

### Remove from Cart
Removes a specific item or variant from the cart.

- **Endpoint**: `DELETE /cart`
- **Payload**:
  ```json
  {
    "productId": "string",
    "variantId": "string | null"
  }
  ```
- **Response**: `{ status: number, message: string, data: any }`

### Clear Cart
Removes all items from the user's cart.

- **Endpoint**: `DELETE /cart/clear`
- **Payload**: None
- **Response**: `{ status: number, message: string, data: any }`

---

## 📊 Data Models (Types)

### VonderaProduct
```typescript
interface VonderaProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  crossedPrice?: number;
  mainImage: {
    small: string;
    large: string;
  };
  images?: string[];
  link: string;
  categoryName: string;
  categoryId?: string;
  isAvailable: boolean;
  currency: string;
  variantsSettings?: Array<{
    id: string;
    quantity: number;
    price: number;
    displayOptions: Record<string, string>;
  }>;
}
```

### VonderaCart
```typescript
interface VonderaCart {
  items: VonderaCartItem[];
  totalPrice: number;
  currency: string;
  totalQuantity: number;
  productsCount: number;
}
```

---

## 💡 Implementation Example

How to send a request using `fetch`:

```javascript
const API_KEY = 'your_api_key';
const USER_ID = 'user_unique_id';

async function addToCart(productId, variantId, quantity) {
  const response = await fetch('https://us-central1-brands-61c3d.cloudfunctions.net/app-api/api/public/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'userid': USER_ID
    },
    body: JSON.stringify({ productId, variantId, quantity })
  });
  
  return await response.json();
}
```
