import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../services";
import {CommentComponent} from "../comment/comment.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommentComponent,
    NgForOf
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}): void => {
      if (id) {
        this.postService.getCommentsByPostId(id).subscribe(value => this.comments = value);
      }
    })
  }


}
