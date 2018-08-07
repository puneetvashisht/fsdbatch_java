import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {
  user: {name: string}
  loggedIn: boolean = false;
  data: string;

  constructor(public userService: UserService, private dataService: DataService) { }

  ngOnInit() {
    this.user = this.userService.user

    this.dataService.fetchData()
    .then((data) => {
      this.data = data;
    })
  }

}
