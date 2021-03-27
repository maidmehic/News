import { Action, createReducer, on } from "@ngrx/store";

import * as ArticleActions from "./article.actions";
import { IArticle } from "src/app/shared/interfaces/article.interface";

export interface State {
    selectedArticle: IArticle
}

const initialState: State = {
    selectedArticle: null
};

const _articleReducer = createReducer(
    initialState,
    on(ArticleActions.selectArticle, (state, action) => ({
        ...state,
        selectedArticle: { ...action.article },
    }))
);

export function articleReducer(state: State, action: Action) {
    return _articleReducer(state, action);
}