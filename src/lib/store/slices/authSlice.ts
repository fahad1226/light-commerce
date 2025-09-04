import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
    token: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (
            state,
            action: PayloadAction<{ user: User; token: string }>
        ) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoading = false;
            state.error = null;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
            state.error = null;
        },
        updateUser: (state, action: PayloadAction<Partial<User>>) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    updateUser,
    clearError,
} = authSlice.actions;

export default authSlice.reducer;
