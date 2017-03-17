import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';
import { AuthGuard } from './auth-guard/auth-guard.service';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'documentation', component: DocumentationComponent },
    { path: 'get-started', component: GetStartedComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'dashboard', component: DashboardComponent,  canActivate:[AuthGuard]},
    { path: 'register-confirmation', component: RegisterConfirmationComponent, canActivate:[AuthGuard] }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);