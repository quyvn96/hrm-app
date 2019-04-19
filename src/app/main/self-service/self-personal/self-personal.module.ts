import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SelfPersonalComponent } from '../self-personal/self-personal.component';
const selfPersonalRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: SelfPersonalComponent }
];
@NgModule({
  declarations: [SelfPersonalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(selfPersonalRoutes)
  ]
})
export class SelfPersonalModule { }
