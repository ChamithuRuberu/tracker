import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../shared/auth.service";

@Component({
  selector: 'app-forgetpw',
  templateUrl: './forgetpw.component.html',
  styleUrls: ['./forgetpw.component.scss']
})
export class ForgetpwComponent implements OnInit{
  email : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
}
