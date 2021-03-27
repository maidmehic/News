import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

import { TopHeadlineService } from "../services/top-headline.service";
import * as TopHeadlineActions from "./top-headline.actions";

@Injectable()
export class TopHeadlineEffects {
    fetchTopHeadlines$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TopHeadlineActions.fetchTopHeadlines),
            mergeMap(action => {
                return this.headlineService.getTopHeadlines(action.requestParams).pipe(
                    map(response => {
                        // if (action.requestParams.page > 1)
                        // return TopHeadlineActions.addTopHeadlines({ headlinesToAdd: response })
                        // else
                        return TopHeadlineActions.fetchTopHeadlinesSuccess({ topHeadlines: response })
                    }),
                    catchError(error => {
                        return of(TopHeadlineActions.fetchTopHeadlinesFail({ errorMsg: "Error while retrieving top headlines" }));
                    })
                )
            })
        )
    );

    constructor(private actions$: Actions, private headlineService: TopHeadlineService) { }
}