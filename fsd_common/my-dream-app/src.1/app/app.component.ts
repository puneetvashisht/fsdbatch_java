import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  condition: boolean = false
  title = 'app';

  toggleCondition(){
    this.condition = !this.condition;
  }
}
