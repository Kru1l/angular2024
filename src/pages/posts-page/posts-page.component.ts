import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {PostsComponent} from "../../app/components/posts/posts.component";

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [
    RouterOutlet,
    PostsComponent
  ],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {

}
