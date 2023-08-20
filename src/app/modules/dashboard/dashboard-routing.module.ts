import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {DashboardContextComponent} from "./components/dashboard-context/dashboard-context.component";
import {DefaultComponent} from "./components/default/default.component";

const routes: Routes = [
    { path: '', component: DashboardComponent ,children:[
    {path:'',redirectTo:'/dashboard/process/home',pathMatch:'full'},
    {path:'process',component:DashboardContextComponent,children:[
        {path:'home',component:DefaultComponent},
      ]}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
