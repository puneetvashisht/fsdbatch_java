import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataDrivenComponent } from './validations/data-driven.component';



@NgModule({
  imports: [ BrowserModule, HttpModule,ReactiveFormsModule , FormsModule ],
  declarations: [ AppComponent, DataDrivenComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
