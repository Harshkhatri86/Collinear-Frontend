import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";

const store = configureStore({
    reducer : {
        ProductSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
