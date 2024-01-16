import { makeAutoObservable } from "mobx"
import mainPage from '../store/mainPage';
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