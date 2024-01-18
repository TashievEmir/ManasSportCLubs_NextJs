import { makeAutoObservable } from "mobx"

class MainPage{
    login = false;
    constructor(){
        makeAutoObservable(this)
    }
    login(){
        this.login = true;
    }
}

export default new MainPage()