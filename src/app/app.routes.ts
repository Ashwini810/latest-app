import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';

export const routes: Routes = [
    {path:'home',component:HeaderComponent,title:'Home'},
    {path:'login',loadComponent:()=>import('./Login/login/login.component').then(l => l.LoginComponent),title:'Login'},
    {path:'',redirectTo:'home',pathMatch:'full'},
]
    
