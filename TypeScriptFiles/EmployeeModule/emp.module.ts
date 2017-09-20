import {NgModule} from "@angular/core"
import { EmployeeComponent } from "./emp.component";
import { EmployeeListComponent } from "./emp.list.component";
import { EmployeeAddComponent } from "./emp.add.component";

@NgModule({
    declarations:[EmployeeComponent,EmployeeListComponent,
        EmployeeAddComponent],
        exports:[EmployeeComponent]
})
export class EmployeeModule{

}