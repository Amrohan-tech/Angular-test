import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  standalone:true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parentMessage: string = ''; // Receiving message from parent

  @Output() messageEvent = new EventEmitter<string>(); //sending message to parent

  sendMessageToParent() {
    this.messageEvent.emit("Hello Pappa!"); // i will Send this message to Parent
  }

}
