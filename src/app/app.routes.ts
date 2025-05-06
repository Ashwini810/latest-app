import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'login',loadComponent:()=>import('./Standalone/Login/login/login.component').then(l=>l.LoginComponent)},
    {path:'home',component:AppComponent},
];
