import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    inStock: boolean;
    rating: number;
}

interface ProductsState {
    products: Product[];
    selectedProduct: Product | null;
    isLoading: boolean;
    error: string | null;
    filters: {
        category: string;
        minPrice: number;
        maxPrice: number;
        inStock: boolean;
    };
}

const initialState: ProductsState = {
    products: [],
    selectedProduct: null,
    isLoading: false,
    error: null,
    filters: {
        category: "",
        minPrice: 0,
        maxPrice: 1000,
        inStock: false,
    },
};

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            // This would typically be an API call
            // const response = await fetch("/api/products");
            // const data = await response.json();
            // return data;
            // For now, returning mock data
            const mockProducts: Product[] = [
                {
                    id: "1",
                    name: "Sample Product 1",
                    description: "This is a sample product description",
                    price: 29.99,
                    image: "/images/product1.jpg",
                    category: "electronics",
                    inStock: true,
                    rating: 4.5,
                },
                {
                    id: "2",
                    name: "Sample Product 2",
                    description: "Another sample product description",
                    price: 49.99,
                    image: "/images/product2.jpg",
                    category: "clothing",
                    inStock: true,
                    rating: 4.2,
                },
            ];

            return mockProducts;
        } catch (error) {
            return rejectWithValue("Failed to fetch products");
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        updateProduct: (
            state,
            action: PayloadAction<{ id: string; updates: Partial<Product> }>
        ) => {
            const index = state.products.findIndex(
                (p) => p.id === action.payload.id
            );
            if (index !== -1) {
                state.products[index] = {
                    ...state.products[index],
                    ...action.payload.updates,
                };
            }
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(
                (p) => p.id !== action.payload
            );
        },
        setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
            state.selectedProduct = action.payload;
        },
        setFilters: (
            state,
            action: PayloadAction<Partial<ProductsState["filters"]>>
        ) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        clearFilters: (state) => {
            state.filters = initialState.filters;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const {
    setProducts,
    addProduct,
    updateProduct,
    removeProduct,
    setSelectedProduct,
    setFilters,
    clearFilters,
    clearError,
} = productsSlice.actions;

export default productsSlice.reducer;
