import { Component } from '@angular/core';
import {CommentsComponent} from "../../app/components/comments/comments.component";

@Component({
  selector: 'app-comments-page',
  standalone: true,
  imports: [
    CommentsComponent
  ],
  templateUrl: './comments-page.component.html',
  styleUrl: './comments-page.component.css'
})
export class CommentsPageComponent {

}
