import { Component, signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('LearnAngular');
  // text = ''
  // email: String = ''
  // getEmail(val: String) {
  // 	this.email = val;
  // }
  // display=true
  // items = ['a','c','d','e']

  count = signal(0);
	constructor() {
		effect(() => {
			console.log(this.count())
		})
	}
// 
//   doubleCount = computed(() => this.count() * 2);
// 
//   constructor() {
//     effect(() => {
//       console.log('Count:', this.count());
//     });
//   }
// 
//   inc() {
//     this.count.update((v) => v + 5);
//   }
}
