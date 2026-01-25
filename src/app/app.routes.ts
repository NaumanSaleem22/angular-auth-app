import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Profile } from './components/profile/profile';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'profile', component: Profile, canActivate: [authGuard] },
];
