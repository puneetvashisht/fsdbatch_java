import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyBadgeComponent } from './feature/my-badge/my-badge.component';
import {BadgeComponent} from './components/badge.component'

@NgModule({
  declarations: [
    AppComponent,
    MyBadgeComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
