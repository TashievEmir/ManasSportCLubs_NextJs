import { configureStore } from "@reduxjs/toolkit"
import facDeps from './slices/facdep'
import announcement from './slices/announcement'
import club from './slices/club'
import teacher from './slices/teacher'
import member from './slices/member'
import schedule from './slices/schedule'
import selectedClub from './slices/selectedClub'
import candidate from './slices/candidate'
import loginStatus from './slices/loginStatus'
import studentStatusInClub from './slices/studentStatusInClub'
import freeTeachers from "./slices/freeTeachers"
import teacherClub from "./slices/teacherClub"

const store = configureStore({
    reducer: {
        facDeps ,
        announcement,
        club,
        teacher,
        member,
        schedule,
        selectedClub,
        candidate,
        loginStatus,
        studentStatusInClub,
        freeTeachers,
        teacherClub
    }
})

export default store