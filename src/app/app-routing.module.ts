import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { UsersComponent } from './features/users/users.component';
import { LoggedOnGuard} from './_guards/loggedOnGuard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [LoggedOnGuard], children: [
      { path: 'users', component: UsersComponent, canActivate: [LoggedOnGuard] }
    ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
