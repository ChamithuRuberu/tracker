import { Component } from '@angular/core';
import {user} from "@angular/fire/auth";
import {AuthService} from "../../../../shared/auth.service";

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {

  first_name:string="Chamithu";
  constructor(private auth: AuthService){}
  register() {
    this.auth.signout();
  }

}
