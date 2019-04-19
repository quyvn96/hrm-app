import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfServiceRoutingModule } from '../self-service/self-service-routing';
import { SelfServiceComponent } from '../self-service/self-service.component';

@NgModule({
  declarations: [SelfServiceComponent],
  imports: [
    CommonModule,
    SelfServiceRoutingModule
  ]
})
export class SelfServiceModule { }
