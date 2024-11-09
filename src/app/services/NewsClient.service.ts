import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'http://localhost:8000/news';  // Replace with the actual API endpoint

  constructor(private http: HttpClient) { }

  getNews(newsType: string, location: string): Observable<any> {
    // Default location to 'globally' if it's empty
    if (!location) {
      location = 'globally';
    }

    // Make request body
    const body = {
      "news_type": newsType,
      "location": location
    };

    // Make request with body
    return this.http.post<any>(this.apiUrl, body);
  }
}