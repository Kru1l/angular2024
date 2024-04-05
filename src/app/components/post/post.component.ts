import {Component, Input} from '@angular/core';
import {IPost} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {


  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
  }

  @Input()
  post: IPost;

  getComments(): void {
    this.router.navigate([this.post.id, 'comments'], {
      relativeTo: this.activatedRoute
    })
  }
}
