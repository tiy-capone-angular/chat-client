import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMessage } from '../message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

  @Input() messages: IMessage[];
  @Output() ack = new EventEmitter<number>();

}
