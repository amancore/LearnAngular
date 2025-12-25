import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('LearnAngular');
	text = ''
	email: String = ''
	getEmail(val: String) {
		this.email = val;
	}
	display=true
	
}
