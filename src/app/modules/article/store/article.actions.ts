import { createAction, props } from "@ngrx/store";

import { IArticleRequest } from "src/app/shared/interfaces/article-request.interface";
import { IArticleWrapper } from "src/app/shared/interfaces/article-wrapper.interface";
import { IArticle } from "src/app/shared/interfaces/article.interface";

export const selectArticle = createAction('[Article] SELECT_ARTICLE', props<{ article: IArticle }>());

export const fetchArticles = createAction('[Article] FETCH_ARTICLES', props<{ requestParams: IArticleRequest }>());
export const fetchArticlesSuccess = createAction('[Article] FETCH_ARTICLES_SUCCESS', props<{ articles: IArticleWrapper }>());
export const fetchArticlesFail = createAction('[Article] FETCH_ARTICLES_FAIL', props<{ errorMsg: string }>());
