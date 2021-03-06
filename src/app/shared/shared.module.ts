import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { MaterialModule } from '../app.module';
import { MdArticleCardComponent } from './components/md-article-card/md-article-card.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { NoDataComponent } from './components/no-data/no-data.component';


@NgModule({
  declarations: [
    ArticleCardComponent,
    MdArticleCardComponent,
    DropdownDirective,
    SearchBarComponent,
    NoDataComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ArticleCardComponent,
    MdArticleCardComponent,
    DropdownDirective,
    SearchBarComponent,
    NoDataComponent
  ]
})
export class SharedModule { }
