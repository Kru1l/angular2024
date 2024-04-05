import {Component, OnInit} from '@angular/core';
import {PostComponent} from "../post/post.component";
import {PostService} from "../../../services";
import {IPost} from "../../../interfaces";
import {NgForOf} from "@angular/common";

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

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe(value => this.posts = value);
  }


}
