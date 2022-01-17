import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = 
[
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'products', component: TutorialsListComponent},
  { path: 'products/:id', component: TutorialDetailsComponent},
  { path: 'add', component: AddTutorialComponent},
  { path: 'login', component: LoginComponent} ,
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
