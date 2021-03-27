import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './store/article.effects';

const routes: Routes = [
  {
    path: '',
    component: ArticleDetailsComponent
  },
  {
    path: 'search',
    component: ArticleSearchComponent
  },
];

@NgModule({
  declarations: [ArticleDetailsComponent, ArticleSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
    FormsModule,
    EffectsModule.forFeature([ArticleEffects]),
  ]
})
export class ArticleModule { }
