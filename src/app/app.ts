import { Component, signal, computed, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './parent/parent';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

interface Quote {
	id: number;
	quote: string;
	author: string;
}
interface ApiResponse {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private http = inject(HttpClient);
  private url = 'https://dummyjson.com/quotes';
  quotes = signal<Quote[]>([]);
  constructor() {
		this.http.get<ApiResponse>(this.url).subscribe((data) => {
			this.quotes.set(data.quotes);
    });
  }
}
	
