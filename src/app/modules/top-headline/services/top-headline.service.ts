import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticleWrapper } from 'src/app/shared/interfaces/article-wrapper.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopHeadlineService {

  API_KEY: string;
  BASE_URL: string;

  constructor(private http: HttpClient) {
    this.API_KEY = environment.API_KEY;
    this.BASE_URL = environment.BASE_URL;
  }

  getTopHeadlines() {
    const params = new HttpParams()
      .set('country', 'us')
      .set('apiKey', this.API_KEY);

    return this.http.get<IArticleWrapper>(`${this.BASE_URL}top-headlines`, { params: params });
  }

}
