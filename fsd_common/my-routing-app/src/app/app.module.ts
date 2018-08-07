import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRouting} from './app.routing'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { ProfileComponent } from './components/profile.component';
import { AlwaysAuthGuard } from './services/alwaysauthguard.service';
import { LoginService } from './services/login.service';
import { ContactsService } from './services/contacts.service';
import { ContactComponent } from './components/contact.component';
import { ContactResolve } from './services/contact.resolve';



@NgModule({
  declarations: [
    AppComponent, LoginComponent, ProfileComponent, ContactComponent
  ],
  imports: [
    BrowserModule, appRouting, HttpModule
  ],
  providers: [AlwaysAuthGuard, LoginService, ContactsService, ContactResolve],
  bootstrap: [AppComponent ]
})
export class AppModule { }
