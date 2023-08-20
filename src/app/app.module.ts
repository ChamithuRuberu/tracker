import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './modules/share/share.module';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainFooterComponent } from './core/main-footer/main-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFireAuthModule} from "@angular/fire/compat/auth"
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Initialize Firebase with your config
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
