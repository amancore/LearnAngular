import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-child',
	standalone : true,
  imports: [],
  templateUrl: './child.html',
  styleUrls: ['./child.css'],
})
export class Child {
  @Input() name: string = '';
  @Output() dataEvent = new EventEmitter<String>(); // event has been created

  sendData() {
    this.dataEvent.emit('Hello from child');
  }
}
