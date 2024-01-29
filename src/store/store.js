import { configureStore } from "@reduxjs/toolkit"
import facDeps from './slices/facdep'
import announcement from './slices/announcement'
import club from './slices/club'
import teacher from './slices/teacher'

const store = configureStore({
    reducer: {
        facDeps ,
        announcement,
        club,
        teacher 
    }
})

export default store