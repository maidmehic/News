import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { MaterialModule } from '../app.module';
import { MdArticleCardComponent } from './components/md-article-card/md-article-card.component';
import { DropdownDirective } from './directives/dropdown.directive';



@NgModule({
  declarations: [
    ArticleCardComponent,
    MdArticleCardComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ArticleCardComponent,
    MdArticleCardComponent,
    DropdownDirective
  ]
})
export class SharedModule { }
