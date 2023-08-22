import { Component } from '@angular/core';
import {user} from "@angular/fire/auth";

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {
  protected readonly user = user;
}
