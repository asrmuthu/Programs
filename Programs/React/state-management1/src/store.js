import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './customerSlice'

const store = configureStore({
    devTools: true,
    reducer:{
        customer1 : customerSlice
    }
}) 

export default store