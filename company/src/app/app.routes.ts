import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DepartmentComponent } from './navbar/department/department.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'contact us',component:ContactComponent},
    {path:'departments',component:DepartmentComponent}
];
