import {makeAutoObservable} from "mobx";
import $api from '../../utils/api'

class Announcement{
    announcement = []

    constructor(){
        makeAutoObservable(this)
    }

    setAnnouncement(announcement){
        this.announcement = announcement
    }

    getAnnouncements(){
        const response = $api.get("/");
    }
}