import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ArticleDetailsComponent
  }
];

@NgModule({
  declarations: [ArticleDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ]
})
export class ArticleModule { }
