import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Profile } from './components/profile/profile';
import { authGuard } from './auth-guard';
import { UserForm } from './components/user-form/user-form';
import { UserListing } from './components/user-listing/user-listing';
import { UserDetails } from './components/user-details/user-details';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'profile', component: Profile, canActivate: [authGuard] },
    { path: 'create-user', component: UserForm, canActivate: [authGuard] },
    { path: 'user-listing', component: UserListing, canActivate: [authGuard] },
    { path: 'user-details/:id', component: UserDetails, canActivate: [authGuard] },
];
