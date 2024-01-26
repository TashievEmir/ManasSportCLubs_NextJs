import {makeAutoObservable, runInAction } from "mobx";
import $api from '../../utils/api';
import {fromPromise} from "mobx-utils";

class Announcement{
    announcement = [];

    constructor(){
        makeAutoObservable(this)
    }

    setAnnouncement(announcement){
        this.announcement = announcement
    }

    async getAnnouncements(){
        const response = await $api.get("/Announcement/GetAll")
        
        this.announcement = response.data;
        console.log(this.announcement)
        // .then(response => {
        //     console.log(response.data, "from")
        //     runInAction(() => {
        //         // Use runInAction to safely modify the observable state
        //         this.announcement = response.data;
        //       });
            
        //     console.log(this.announcement, "state2")
        //   })
        //   .catch(error => {
        //     console.error('Error fetching data:', error);
        //   });
    }
}
//const dataStore = new DataStore();
export default new Announcement();