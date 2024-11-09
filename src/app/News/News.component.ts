import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/NewsClient.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'News',
  templateUrl: './News.component.html',
  styleUrls: ['./News.component.scss'],
  standalone: true,
  providers: [NewsService],
  imports: [FormsModule, CommonModule]
})
export class NewsComponent {

  
  newsType: string = '';
  location: string = '';
  newsList: any[] = [];
  loading: boolean = false;  // For loading state

  constructor(private readonly newsService: NewsService) { }

  onSearch(): void {
    if (!this.newsType) {
      // If newsType is not selected, exit
      alert("Please select a news type.");
      return;
    }

    this.loading = true;  // Show loading state
    this.newsList = [];  // Clear previous news

    this.newsService.getNews(this.newsType, this.location).subscribe(
      (response) => {
        this.newsList = response;  // Assuming the response is an array of news items
        this.loading = false;  // Hide loading state
      },
      (error) => {
        console.error('Error fetching news', error);
        this.loading = false;  // Hide loading state
      }
    );
  }

}
