import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyBadgeComponent } from './feature/my-badge/my-badge.component';
import {BadgeComponent} from './components/badge.component'
import { OuterComponent } from './outer.component';
import {ParentComponent} from './components/parent.component'
import {ChildComponent} from './components/child.component'

@NgModule({
  declarations: [
    AppComponent,
    MyBadgeComponent,
    BadgeComponent,
    OuterComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [OuterComponent]
})
export class AppModule { }
