import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input()
  user: IUser;

  @Output()
  userId = new EventEmitter<number>();

  getPosts(): void {
    this.userId.emit(this.user.id);
  }
}
