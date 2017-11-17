import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IMessage } from '../message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent {

  @Input() messages: IMessage[];
  @Output() ack = new EventEmitter<number>();

}
