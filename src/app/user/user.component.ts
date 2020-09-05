import { User } from './../model/user';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('UserComponent: Init.');
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((list: User[]) => {
      this.userList = list;
    });
  }

}
