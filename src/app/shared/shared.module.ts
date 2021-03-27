import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { MaterialModule } from '../app.module';
import { MdArticleCardComponent } from './components/md-article-card/md-article-card.component';



@NgModule({
  declarations: [
    ArticleCardComponent,
    MdArticleCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ArticleCardComponent,
    MdArticleCardComponent
  ]
})
export class SharedModule { }
