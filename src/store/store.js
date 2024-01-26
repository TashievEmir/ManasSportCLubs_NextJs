import { configureStore } from "@reduxjs/toolkit"
import facDeps from './slices/facdep'
import announcement from './slices/announcement'

const store = configureStore({
    reducer: {
        facDeps ,
        announcement 
    }
})

export default store