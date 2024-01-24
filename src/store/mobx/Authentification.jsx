import { makeAutoObservable } from "mobx"

class Authentification{
    token = '';
    user = '';
    role = '';
    constructor(){
        makeAutoObservable(this)
    }
    setToken(token){
        this.token = token;
    }
    setUser(user){
        this.user = user;
    }
    setRole(role){
        this.role = role;
    }
}

export default new Authentification()