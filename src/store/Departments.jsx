import { makeAutoObservable } from "mobx"
import $api from '../utils/api'

class Departments{
    departmentName = [];
    constructor(){
        makeAutoObservable(this)
    }
    addDepartmentName(name){
        this.departmentName=name;
    }
    getDepartments(){
        fetch('https://10.111.70.174:5000/api/v1/Department/GetAll')
        .then(response => response.json())
        .then((data) => {
            this.departmentName = data
        })
        // this.addDepartmentName(departmentsResponse.data)
        // this.departmentName = [...this.departmentName, ...departmentsResponse.data]
        console.log(this.departmentName)
    }
}
export default new Departments()