# Redux Store Implementation

This directory contains a complete Redux store implementation using Redux Toolkit with TypeScript support.

## Structure

```
src/lib/store/
├── index.ts          # Main store configuration
├── hooks.ts          # Typed hooks for Redux usage
├── provider.tsx      # Redux Provider component
├── slices/           # Redux slices
│   ├── uiSlice.ts    # UI state (showShoppingCart, loading, errors)
│   ├── authSlice.ts  # Authentication state (isLoggedIn, user, token)
│   └── productsSlice.ts # Products state (products list, filters)
└── README.md         # This documentation
```

## Store States

### 1. UI State (`uiSlice`)

-   `showShoppingCart`: Boolean to control shopping cart visibility
-   `isLoading`: Loading state for UI operations
-   `error`: Error messages for UI operations

### 2. Authentication State (`authSlice`)

-   `isLoggedIn`: Boolean indicating user login status
-   `user`: User object with id, email, and name
-   `token`: Authentication token
-   `isLoading`: Loading state for auth operations
-   `error`: Authentication error messages

### 3. Products State (`productsSlice`)

-   `products`: Array of product objects
-   `selectedProduct`: Currently selected product
-   `isLoading`: Loading state for product operations
-   `error`: Product operation error messages
-   `filters`: Product filtering options

## Usage Examples

### Setting up the Provider

Wrap your app with the StoreProvider in your root layout:

```tsx
// app/layout.tsx
import { StoreProvider } from "@/lib/store/provider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>{children}</StoreProvider>
            </body>
        </html>
    );
}
```

### Using the Store in Components

```tsx
// components/ShoppingCart.tsx
"use client";

import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import {
    toggleShoppingCart,
    hideShoppingCart,
} from "@/lib/store/slices/uiSlice";

export function ShoppingCart() {
    const dispatch = useAppDispatch();
    const { showShoppingCart } = useAppSelector((state) => state.ui);
    const { products } = useAppSelector((state) => state.products);

    const handleToggle = () => {
        dispatch(toggleShoppingCart());
    };

    const handleClose = () => {
        dispatch(hideShoppingCart());
    };

    if (!showShoppingCart) return null;

    return (
        <div className="shopping-cart">
            <button onClick={handleClose}>Close</button>
            <h2>Shopping Cart</h2>
            {/* Cart content */}
        </div>
    );
}
```

### Authentication Example

```tsx
// components/LoginForm.tsx
"use client";

import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import {
    loginStart,
    loginSuccess,
    loginFailure,
} from "@/lib/store/slices/authSlice";

export function LoginForm() {
    const dispatch = useAppDispatch();
    const { isLoading, error } = useAppSelector((state) => state.auth);

    const handleLogin = async (credentials: {
        email: string;
        password: string;
    }) => {
        dispatch(loginStart());

        try {
            // API call would go here
            const response = await loginAPI(credentials);
            dispatch(
                loginSuccess({
                    user: response.user,
                    token: response.token,
                })
            );
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            {isLoading && <div>Loading...</div>}
            {/* Form fields */}
        </form>
    );
}
```

### Products Example

```tsx
// components/ProductList.tsx
"use client";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import {
    fetchProducts,
    setSelectedProduct,
} from "@/lib/store/slices/productsSlice";

export function ProductList() {
    const dispatch = useAppDispatch();
    const { products, isLoading, error } = useAppSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleProductClick = (product: Product) => {
        dispatch(setSelectedProduct(product));
    };

    if (isLoading) return <div>Loading products...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="product-list">
            {products.map((product) => (
                <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                >
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
}
```

## Best Practices Implemented

1. **TypeScript Support**: Full type safety with inferred types
2. **Redux Toolkit**: Modern Redux with simplified boilerplate
3. **Slice Pattern**: Organized state management by feature
4. **Async Thunks**: Built-in support for async operations
5. **Typed Hooks**: Custom hooks with proper typing
6. **Error Handling**: Comprehensive error state management
7. **Loading States**: Loading indicators for async operations
8. **Immutable Updates**: Proper state updates using Redux Toolkit

## Available Actions

### UI Actions

-   `toggleShoppingCart()` - Toggle cart visibility
-   `showShoppingCart()` - Show cart
-   `hideShoppingCart()` - Hide cart
-   `setLoading(boolean)` - Set loading state
-   `setError(string | null)` - Set error message
-   `clearError()` - Clear error message

### Auth Actions

-   `loginStart()` - Start login process
-   `loginSuccess({ user, token })` - Login successful
-   `loginFailure(string)` - Login failed
-   `logout()` - Logout user
-   `updateUser(partialUser)` - Update user info
-   `clearError()` - Clear auth error

### Product Actions

-   `fetchProducts()` - Async action to fetch products
-   `setProducts(Product[])` - Set products list
-   `addProduct(Product)` - Add new product
-   `updateProduct({ id, updates })` - Update existing product
-   `removeProduct(string)` - Remove product by ID
-   `setSelectedProduct(Product | null)` - Set selected product
-   `setFilters(partialFilters)` - Update filters
-   `clearFilters()` - Reset filters to default
