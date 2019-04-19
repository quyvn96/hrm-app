import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SelfJobInformationComponent } from '../self-job-information/self-job-information.component';
const selfJobInformationRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: SelfJobInformationComponent }
];
@NgModule({
  declarations: [SelfJobInformationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(selfJobInformationRoutes)
  ]
})
export class SelfJobInformationModule { }
