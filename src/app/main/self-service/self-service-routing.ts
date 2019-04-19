import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SelfServiceComponent } from '../self-service/self-service.component';
export const selfServiceRoutes: Routes = [
  {
    path: '', component: SelfServiceComponent, children: [
      { path: '', redirectTo: '/main/home/index', pathMatch: 'full' },
      { path: 'selfjobinformation', loadChildren: './self-job-information/self-job-information.module#SelfJobInformationModule' },
      { path: 'selfpersonal', loadChildren: './self-personal/self-personal.module#SelfPersonalModule' },
      { path: 'selftraining', loadChildren: './self-training/self-training.module#SelfTrainingModule' }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(selfServiceRoutes)
  ],
  exports: [RouterModule]
})
export class SelfServiceRoutingModule { }
