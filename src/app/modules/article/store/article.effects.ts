import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

import { ArticleService } from "../services/article.service";
import * as ArticleActions from "./article.actions";

@Injectable()
export class ArticleEffects {
    fetchArticles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ArticleActions.fetchArticles),
            mergeMap(action => {
                return this.articleService.getArticles(action.requestParams).pipe(
                    map(response => {
                        return ArticleActions.fetchArticlesSuccess({ articles: response })
                    }),
                    catchError(error => {
                        return of(ArticleActions.fetchArticlesFail({ errorMsg: "Error while retrieving articles" }));
                    })
                )
            })
        )
    );

    constructor(private actions$: Actions, private articleService: ArticleService) { }
}