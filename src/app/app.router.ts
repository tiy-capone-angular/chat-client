import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
