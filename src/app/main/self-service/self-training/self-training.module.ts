import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SelfTrainingComponent } from '../self-training/self-training.component';
const selfTrainingRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: SelfTrainingComponent }
];
@NgModule({
  declarations: [SelfTrainingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(selfTrainingRoutes)
  ]
})
export class SelfTrainingModule { }
