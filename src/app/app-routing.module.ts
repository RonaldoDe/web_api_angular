import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { OffersComponent } from './component/offers/offers.component';
import { DetailsBookComponent } from './component/details-book/details-book.component';
import { ListBooksComponent } from './component/admin/list-books/list-books.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { Page404Component } from './component/page404/page404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'offers', component: OffersComponent}, // only users auth
  {path: 'book/:id', component: DetailsBookComponent},
  {path: 'admin/list-books', component: ListBooksComponent},// only users auth
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent},// only users auth
  {path: '**', component: Page404Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
