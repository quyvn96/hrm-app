import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { UserModule } from './user/user.module';
import { UtilityService } from '../core/services/utility.service';
import { AuthenService } from '../core/services/authen.service';
import { HttpClientModule } from '@angular/common/http';
import { SidebarMenuComponent } from '../shared/sidebar-menu/sidebar-menu.component';
import { TopMenuComponent } from '../shared/top-menu/top-menu.component';
@NgModule({
  declarations: [MainComponent,SidebarMenuComponent,TopMenuComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    UserModule,
    HttpClientModule
  ],
  providers: [UtilityService, AuthenService]
})
export class MainModule { }
