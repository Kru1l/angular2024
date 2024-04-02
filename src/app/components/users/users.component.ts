import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

import {IUser} from "../../interfaces/user.interface";
import {UserService} from "../../services/user.service";
import {UserComponent} from "../user/user.component";
import {PostsComponent} from "../posts/posts.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    NgIf,
    PostsComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {
  users: IUser[];
  userId: number;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value);
  }

  getUserIdEvent(id: number): void {
    this.userId = id;
  }
}
