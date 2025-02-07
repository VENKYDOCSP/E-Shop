import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    categories: "",
    loading: false,
    error: null,
};

const categorySlice = createSlice({
    name: "category",
    initialState: initialValue,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { setCategories, setLoading, setError, clearError } = categorySlice.actions;

export default categorySlice.reducer;
