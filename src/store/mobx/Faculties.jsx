import { makeAutoObservable } from "mobx"
import $api from '../../utils/api'

class Faculties{
    facultyName =[];
    constructor(){
        makeAutoObservable(this)
    }
    addFacultyName(name){
        this.facultyName.push(name);
    }
    setFacultyName(array){
        this.facultyName=array
    }
    async getFaculties(){
        const facultiesResponse = await $api.get('Faculty/GetAll');
        this.facultyName = [...this.facultyName, ...facultiesResponse.data]
        //console.log(this.facultyName)
    }
}
export default new Faculties()