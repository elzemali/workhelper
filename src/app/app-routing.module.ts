import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeframeComponent } from './employeframe/employeframe.component';
import { PointageframeComponent } from './pointageframe/pointageframe.component';

const routes: Routes = [
  {  path:"",component:EmployeframeComponent,},
  {path : "pointage",component:PointageframeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  RoutingComponent =[EmployeframeComponent,PointageframeComponent];
 }
