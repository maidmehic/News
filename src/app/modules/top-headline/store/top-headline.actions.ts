import { createAction, props } from "@ngrx/store";
import { IArticleWrapper } from "src/app/shared/interfaces/article-wrapper.interface";
import { ITopHeadlineRequest } from "src/app/shared/interfaces/top-headline-request.interface";

export const fetchTopHeadlines = createAction('[TopHeadline] FETCH_TOP_HEADLINE', props<{ requestParams: ITopHeadlineRequest }>());
export const fetchTopHeadlinesSuccess = createAction('[TopHeadline] FETCH_TOP_HEADLINE_SUCCESS', props<{ topHeadlines: IArticleWrapper }>());
export const addTopHeadlines = createAction('[TopHeadline] ADD_TOP_HEADLINES', props<{ headlinesToAdd: IArticleWrapper }>());
export const fetchTopHeadlinesFail = createAction('[TopHeadline] FETCH_TOP_HEADLINE_FAIL', props<{ errorMsg: string }>());