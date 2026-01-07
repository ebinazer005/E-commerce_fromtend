import { configureStore } from "@reduxjs/toolkit";
import singinReducer from "./singin"

export const store = configureStore({
    reducer:{
        storeForSingin : singinReducer,
    }
});
export default store;