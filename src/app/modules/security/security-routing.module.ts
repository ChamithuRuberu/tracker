import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ForgetpwComponent} from "./forgetpw/forgetpw.component";
import {VerifyemailComponent} from "./verifyemail/verifyemail.component";

const routes: Routes = [
  { path: '', component: SecurityComponent, children:[
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'forgetpw',component:ForgetpwComponent},
    {path:'verifyemail',component:VerifyemailComponent},
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
