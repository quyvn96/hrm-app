import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { UserModule } from './user/user.module';
import { UtilityService } from '../core/services/utility.service';
import { AuthenService } from '../core/services/authen.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    UserModule,
    HttpClientModule
  ],
  providers:[UtilityService,AuthenService]
})
export class MainModule { }
