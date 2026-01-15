import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
	standalone: true,
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
	getData(message: string) {
		console.log(message);
	}
	panelOpen = signal(true)
}	
