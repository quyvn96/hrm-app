import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
export const mainRoutes : Routes = [
    {
        path:'',component:MainComponent,children:[
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'home',loadChildren:'./home/home.module#HomeModule'},
            {path:'user',loadChildren:'./user/user.module#UserModule'}
        ]
    }
]; 
@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
  })
export class MainRoutingModule { }