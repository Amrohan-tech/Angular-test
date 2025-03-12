import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ChildComponent } from '../child/child.component'; // Imported ChildComponent

@Component({
  selector: 'app-parent',
  standalone: true,  //standalone components are components that are not part of any module. They can be used independently, without being nested within other components
  imports: [CommonModule, ChildComponent], //  Imported ChildComponent here
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messageToChild: string = " "; // Initial message i will display

  sendMessageToChild() {
    this.messageToChild = "hello beta!";
  }
  receivedMessage: string = ""; 

  receiveMessage(message: string) {
  this.receivedMessage = message; // Updating received message validation added
  }

}

