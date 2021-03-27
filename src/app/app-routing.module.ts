import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'top-headlines',
    pathMatch: 'full'
  },
  {
    path: 'top-headlines', loadChildren: () => import('./modules/top-headline/top-headline.module').then(m => m.TopHeadlineModule)
  },
  {
    path: 'article', loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
