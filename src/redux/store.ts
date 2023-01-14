import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices";
import createSagaMiddleware from 'redux-saga'
import saga from "./saga";

export const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        allBooks: bookSlice.reducer
    },
    middleware:[sagaMiddleware]
});
sagaMiddleware.run(saga);

export default store;