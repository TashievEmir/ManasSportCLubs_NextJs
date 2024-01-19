import { makeAutoObservable } from "mobx"

class Departments{
    departmentName =[];
    constructor(){
        makeAutoObservable(this)
    }
    addFacultyName(name){
        this.departmentName.push(name);
    }
}
export default new Departments()