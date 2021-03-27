import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  selectedArticle: IArticle;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store.select('article').subscribe(
      res => {
        this.selectedArticle = res.selectedArticle;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}