import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IArticleRequest } from 'src/app/shared/interfaces/article-request.interface';
import { IArticleWrapper } from 'src/app/shared/interfaces/article-wrapper.interface';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AppState } from 'src/app/store/app.reducer';
import { ArticleService } from '../services/article.service';
import * as ArticleActions from '../store/article.actions';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit, OnDestroy {
  requestParams: IArticleRequest;
  subscription: Subscription;

  displayLoader: boolean;
  articles: IArticleWrapper;

  constructor(private store: Store<AppState>, private router: Router, public articleService: ArticleService, private notifService: NotificationService) { }

  ngOnInit(): void {
    this.subscription = this.store.select('article').subscribe(
      res => {
        this.displayLoader = res.isLoading;
        this.requestParams = { ...res.requestParams };
        this.articles = res.articles;
      }
    )
  }

  onReadFullArticleClick(article: IArticle) {
    this.store.dispatch(ArticleActions.selectArticle({ article }));
    this.router.navigate(['article']);
  }

  onSearch(term: string) {
    this.requestParams.q = term;
    this.searchArticles();
  }

  onSortOptionChanged(e) {
    this.requestParams.sortBy = e.value;
    this.searchArticles();
  }

  searchArticles() {
    if (this.requestParams.q) {
      let requestParams: IArticleRequest = {
        q: this.requestParams.q,
        sortBy: this.requestParams.sortBy
      };
      this.store.dispatch(ArticleActions.fetchArticles({ requestParams }))
    }
    else
      this.notifService.openSnackBar("Please enter a search term.", "Dismiss");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
