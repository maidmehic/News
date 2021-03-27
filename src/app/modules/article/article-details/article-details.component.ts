import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IArticleRequest } from 'src/app/shared/interfaces/article-request.interface';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { AppState } from 'src/app/store/app.reducer';
import * as ArticleActions from '../store/article.actions';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  selectedArticle: IArticle;
  searchTerm: string;
  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.store.select('article').subscribe(
      res => {
        this.selectedArticle = res.selectedArticle;
      }
    )
  }

  onSearchBtnClick() {
    if (this.searchTerm) {
      let requestParams: IArticleRequest = {
        q: this.searchTerm
      };
      this.store.dispatch(ArticleActions.fetchArticles({ requestParams }))
      this.router.navigate(["search"], { relativeTo: this.route });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}