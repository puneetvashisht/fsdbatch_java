import { Component } from '@angular/core';
import {Course} from './entities/course'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  courses: Array<Course> = [{
    title: 'Angular',
    summary: 'ds klgsa jkgsdkl jkdgdks gjklsdk gdskd sksdksk'
  },
  {
    title: 'ReactJS',
    summary: 'ds klgsa jkgsdkl jkdgdks gjklsdk gdskd sksdksk'
  },
  {
    title: 'Ember',
    summary: 'ds klgsa jkgsdkl jkdgdks gjklsdk gdskd sksdksk'
  },
  {
    title: 'EmberJS',
    summary: 'ds klgsa jkgsdkl jkdgdks gjklsdk gdskd sksdksk'
  }]
}
