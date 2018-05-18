import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>This is the outermost component</h1>
        <hr/>
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
        <hr/>
        <parent-component>
    `
})
export class OuterComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}