import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticleRequest } from 'src/app/shared/interfaces/article-request.interface';
import { IArticleWrapper } from 'src/app/shared/interfaces/article-wrapper.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  API_KEY: string;
  BASE_URL: string;
  sortOptions: { name: string, value: string }[];

  constructor(private http: HttpClient) {
    this.API_KEY = environment.API_KEY;
    this.BASE_URL = environment.BASE_URL;

    this.sortOptions = [
      { name: 'Relevance', value: 'relevancy' },
      { name: 'Popularity', value: 'popularity' },
      { name: 'Publish Date', value: 'publishedAt' }
    ];
  }

  getArticles(p: IArticleRequest) {
    let params = new HttpParams()
      .set('apiKey', this.API_KEY);

    Object.keys(p).forEach(key => {
      params = params.append(key.toString(), p[key]);
    });

    return this.http.get<IArticleWrapper>(`${this.BASE_URL}everything`, { params });
  }
}
