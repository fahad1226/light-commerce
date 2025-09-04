import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productsReducer from "./slices/productsSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer,
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types for serialization checks
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export typed hooks for use throughout the app
export { useAppDispatch, useAppSelector } from "./hooks";
