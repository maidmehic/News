import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { MaterialModule } from '../app.module';



@NgModule({
  declarations: [
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ArticleCardComponent,
  ]
})
export class SharedModule { }
