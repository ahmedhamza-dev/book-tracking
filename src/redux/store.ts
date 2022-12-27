import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices";

const store = configureStore({
    reducer: {
        allBooks: bookSlice.reducer
    }
});

export default store;