import {makeAutoObservable} from "mobx";

class Token{
    token = '';
    constructor(){
        makeAutoObservable(this);
    }

    setToken(newToken){
        this.token = newToken;
    }
}