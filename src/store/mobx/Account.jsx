import {makeAutoObservable} from "mobx";

class Account{
    email = '';
    role = '';

    constructor(){
        makeAutoObservable(this);
    }

    setEmail(newEmail){
        this.email = newEmail;
    }

    setRole(newRole){
        this.role = newRole;
    }
}