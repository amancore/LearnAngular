import { Component, signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './parent/parent';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
 
}
	
