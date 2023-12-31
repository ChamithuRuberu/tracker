import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardContextComponent } from './components/dashboard-context/dashboard-context.component';
import { DefaultComponent } from './components/default/default.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import {FormsModule} from "@angular/forms";
import { FileUploadComponent } from './components/file-upload/file-upload.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContextComponent,
    DefaultComponent,
    DashboardHeaderComponent,
    FileUploadComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,

  ]
})
export class DashboardModule { }
