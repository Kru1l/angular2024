import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

import {IUser} from "../../interfaces/user.interface";
import {UserService} from "../../services/user.service";
import {UserComponent} from "../user/user.component";
import {UserDetailsComponent} from "../user-details/user-details.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    UserDetailsComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})


export class UsersComponent implements OnInit {
  users: IUser[];
  userDetails: IUser;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value);
  }

  getUserEvent(user: IUser): void {
    this.userDetails = user;
  }
}
