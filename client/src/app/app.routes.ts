import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
<<<<<<< Updated upstream

export const routes: Routes = [
    {path: 'auth', component: AuthComponent}
=======
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'auth', component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent }
        ]
    },
    {
        path: 'home', component: HomeComponent
    }
>>>>>>> Stashed changes
];
