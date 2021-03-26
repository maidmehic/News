import { createAction, props } from "@ngrx/store";
import { IArticleWrapper } from "src/app/shared/interfaces/article-wrapper.interface";

export const fetchTopHeadlines = createAction('[TopHeadline] FETCH_TOP_HEADLINE');
export const fetchTopHeadlinesSuccess = createAction('[TopHeadline] FETCH_TOP_HEADLINE_SUCCESS', props<{ topHeadlines: IArticleWrapper }>());
export const fetchTopHeadlinesFail = createAction('[TopHeadline] FETCH_TOP_HEADLINE_FAIL', props<{ errorMsg: string }>());