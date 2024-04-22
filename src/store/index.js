import { configureStore } from "@reduxjs/toolkit";
import checkedReducer from "./slices/checked-slice";



export default configureStore({

    reducer:{
        checked:checkedReducer
    }
})