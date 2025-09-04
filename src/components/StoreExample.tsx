"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { loginSuccess, logout } from "@/lib/store/slices/authSlice";
import { addProduct, fetchProducts } from "@/lib/store/slices/productsSlice";
import {
    hideShoppingCart,
    toggleShoppingCart,
} from "@/lib/store/slices/uiSlice";

export function StoreExample() {
    const dispatch = useAppDispatch();

    // Select states from all three slices
    const {
        showShoppingCart,
        isLoading: uiLoading,
        error: uiError,
    } = useAppSelector((state) => state.ui);
    const { isLoggedIn, user } = useAppSelector((state) => state.auth);
    const {
        products,
        isLoading: productsLoading,
        error: productsError,
    } = useAppSelector((state) => state.products);

    // UI Actions
    const handleToggleCart = () => dispatch(toggleShoppingCart());
    const handleHideCart = () => dispatch(hideShoppingCart());

    // Auth Actions
    const handleLogin = () => {
        dispatch(
            loginSuccess({
                user: { id: "1", email: "user@example.com", name: "John Doe" },
                token: "mock-token-123",
            })
        );
    };
    const handleLogout = () => dispatch(logout());

    // Product Actions
    const handleFetchProducts = () => dispatch(fetchProducts());
    const handleAddProduct = () => {
        const newProduct = {
            id: Date.now().toString(),
            name: `Product ${products.length + 1}`,
            description: "A new product",
            price: Math.floor(Math.random() * 100) + 10,
            image: "/images/product.jpg",
            category: "electronics",
            inStock: true,
            rating: 4.0,
        };
        dispatch(addProduct(newProduct));
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Redux Store Example</h1>

            {/* UI State Section */}
            <div className="mb-8 p-4 border rounded-lg">
                <h2 className="text-xl font-semibold mb-4">UI State</h2>
                <div className="space-y-2">
                    <p>
                        <strong>Shopping Cart Visible:</strong>{" "}
                        {showShoppingCart ? "Yes" : "No"}
                    </p>
                    <p>
                        <strong>Loading:</strong> {uiLoading ? "Yes" : "No"}
                    </p>
                    {uiError && (
                        <p>
                            <strong>Error:</strong> {uiError}
                        </p>
                    )}
                </div>
                <div className="mt-4 space-x-2">
                    <button
                        onClick={handleToggleCart}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Toggle Cart
                    </button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Show Cart
                    </button>
                    <button
                        onClick={handleHideCart}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Hide Cart
                    </button>
                </div>
            </div>

            {/* Auth State Section */}
            <div className="mb-8 p-4 border rounded-lg">
                <h2 className="text-xl font-semibold mb-4">
                    Authentication State
                </h2>
                <div className="space-y-2">
                    <p>
                        <strong>Logged In:</strong> {isLoggedIn ? "Yes" : "No"}
                    </p>
                    {user && (
                        <div>
                            <p>
                                <strong>User:</strong> {user.name} ({user.email}
                                )
                            </p>
                        </div>
                    )}
                </div>
                <div className="mt-4 space-x-2">
                    {!isLoggedIn ? (
                        <button
                            onClick={handleLogin}
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>

            {/* Products State Section */}
            <div className="mb-8 p-4 border rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Products State</h2>
                <div className="space-y-2">
                    <p>
                        <strong>Products Count:</strong> {products.length}
                    </p>
                    <p>
                        <strong>Loading:</strong>{" "}
                        {productsLoading ? "Yes" : "No"}
                    </p>
                    {productsError && (
                        <p>
                            <strong>Error:</strong> {productsError}
                        </p>
                    )}
                </div>
                <div className="mt-4 space-x-2">
                    <button
                        onClick={handleFetchProducts}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Fetch Products
                    </button>
                    <button
                        onClick={handleAddProduct}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Add Product
                    </button>
                </div>

                {/* Display Products */}
                {products.length > 0 && (
                    <div className="mt-4">
                        <h3 className="text-lg font-medium mb-2">Products:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="p-3 border rounded"
                                >
                                    <h4 className="font-medium">
                                        {product.name}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {product.description}
                                    </p>
                                    <p className="text-lg font-bold">
                                        ${product.price}
                                    </p>
                                    <p className="text-sm">
                                        Category: {product.category}
                                    </p>
                                    <p className="text-sm">
                                        Rating: {product.rating}/5
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Shopping Cart Display */}
            {showShoppingCart && (
                <div className="fixed top-4 right-4 w-80 bg-white border rounded-lg shadow-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Shopping Cart</h3>
                        <button
                            onClick={handleHideCart}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>
                    <p className="text-gray-600">
                        Cart is visible! Add some products to see them here.
                    </p>
                </div>
            )}
        </div>
    );
}
