import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeadlineComponent } from './top-headline.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { TopHeadlineEffects } from './store/top-headline.effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/app.module';

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
    SharedModule,
    MaterialModule
  ]
})
export class TopHeadlineModule { }
