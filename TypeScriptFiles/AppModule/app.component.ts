import {Component} from "@angular/core"
import {Employee} from "../Models/employee"
import {EmployeeService} from "../Logics/EmployeeService"
@Component({
    selector:'my-new-tag',
    templateUrl:'./app.component.html',
    providers:[{provide:EmployeeService,
    useClass:EmployeeService}]
})
export class AppComponent{
    Employees:Array<Employee>;
    IsAddNew:boolean;
    constructor(private eLogic:EmployeeService){
        this.IsAddNew=false;
     this.Employees=eLogic.GetEmployees();
    }
    SaveEmployee():void{
        this.eLogic.SaveEmployee
        (new Employee("E",50000));

        this.IsAddNew=false;
        
    }
    ShowAddNew(){
        this.IsAddNew=true;
    }
    
    HideAddNew(){
        this.IsAddNew=false;
    }
}