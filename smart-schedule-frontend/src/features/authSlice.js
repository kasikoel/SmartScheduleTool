import { createSlice } from "@reduxjs/toolkit";

// Initial state for authentication
const initialState = {
    token: null,
    isAuthenticated: false,
};

// Create the auth slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
});

// Export actions and reducer
export default authSlice.reducer;