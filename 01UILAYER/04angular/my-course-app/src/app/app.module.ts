import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { SearchCoursePipe } from './pipes/searchcourses.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
   SearchCoursePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
