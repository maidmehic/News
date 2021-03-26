import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeadlineComponent } from './top-headline.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TopHeadlineComponent
  }
];

@NgModule({
  declarations: [TopHeadlineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TopHeadlineModule { }
