import { configureStore } from "@reduxjs/toolkit"
import facDepSlice from './slices/facdep'

const store = configureStore({
    reducer: {
        facDeps: facDepSlice
    }
})

export default store