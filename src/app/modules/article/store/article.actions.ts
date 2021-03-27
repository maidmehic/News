import { createAction, props } from "@ngrx/store";
import { IArticle } from "src/app/shared/interfaces/article.interface";

export const selectArticle = createAction('[Article] SELECT_ARTICLE', props<{ article: IArticle }>());
