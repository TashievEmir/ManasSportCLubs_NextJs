import { makeAutoObservable } from "mobx"

class Faculties{
    facultyName =[];
    constructor(){
        makeAutoObservable(this)
    }
    addFacultyName(name){
        this.facultyName.push(name);
    }
}
export default new Faculties()