import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeadlineComponent } from './top-headline.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { TopHeadlineEffects } from './store/top-headline.effects';

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
    EffectsModule.forFeature([TopHeadlineEffects]),
  ]
})
export class TopHeadlineModule { }
