import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {NgIf} from "@angular/common";
import {IPost} from "../../interfaces/post.interface";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {
  posts: IPost[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getPosts(this.user.id).subscribe(value => this.posts = value)
  }

  @Input()
  user: IUser;

  @Output()
  lift = new EventEmitter<IUser>();

  @Output()
  postsById = new EventEmitter<IPost[]>();

  getDetails(): void {
    this.lift.emit(this.user);
  }

  getPosts(): void {
    this.postsById.emit(this.posts)
  }
}
