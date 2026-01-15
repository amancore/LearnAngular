import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private http = inject(HttpClient);
  private url = 'https://dummyjson.com/quotes';
	private singleIdUrl = 'https://dummyjson.com/quotes/1';
  listQuotes = signal<Quote[]>([]);
	singleQuote = signal<Quote | null>(null);

  constructor() {
    this.http.get<ApiResponse>(this.url).subscribe((data) => {
      this.listQuotes.set(data.quotes);
    });

		this.http.get<Quote>(this.singleIdUrl).subscribe((data) => {
			this.singleQuote.set(data);
		})
		console.log(this.singleQuote)
  }
	currentId = signal(1);

	getRandomQuote() {
		const randomId = Math.floor(Math.random() * 30) + 1; // 1-30
		this.http.get<Quote>(`https://dummyjson.com/quotes/${randomId}`).subscribe((data => {
			this.singleQuote.set(data);
		}));
		this.currentId.set(randomId);
	}
}
	
