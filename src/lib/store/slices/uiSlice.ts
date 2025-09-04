import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
    showShoppingCart: boolean;
    isLoading: boolean;
    error: string | null;
}

const initialState: UiState = {
    showShoppingCart: false,
    isLoading: false,
    error: null,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleShoppingCart: (state) => {
            state.showShoppingCart = !state.showShoppingCart;
        },
        showShoppingCart: (state) => {
            state.showShoppingCart = true;
        },
        hideShoppingCart: (state) => {
            state.showShoppingCart = false;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    toggleShoppingCart,
    showShoppingCart,
    hideShoppingCart,
    setLoading,
    setError,
    clearError,
} = uiSlice.actions;

export default uiSlice.reducer;
