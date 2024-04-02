import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";
import {PostComponent} from "../post/post.component";
import {NgForOf} from "@angular/common";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})

export class PostsComponent implements OnInit {
  posts: IPost[];
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getPosts(this.userId).subscribe(value => this.posts = value);
  }


  @Input()
  userId: number

}
