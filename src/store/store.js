import {configureStore} from '@reduxjs/toolkit'
import controlReducer from "./controlSlice"

const store = configureStore({

    reducer:{
        control: controlReducer,
    },
});

export default store;