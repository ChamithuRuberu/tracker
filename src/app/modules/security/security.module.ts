import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpwComponent } from './forgetpw/forgetpw.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';



@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
    SignupComponent,
    ForgetpwComponent,
    VerifyemailComponent,

  ],
    imports: [
        CommonModule,
        SecurityRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class SecurityModule { }
