import {Component, Input} from '@angular/core';
import {IComment} from "../../../interfaces";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  @Input()
  comment: IComment;

}
