import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { appComponentName } from './path/fileName.component';
import {AppComponent} from './app.component'
import {BadgeComponent} from './badge.component'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, BadgeComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {

}