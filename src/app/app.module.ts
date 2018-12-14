import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OffersComponent } from './component/offers/offers.component';
import { HeroComponent } from './component/hero/hero.component';
import { DetailsBookComponent } from './component/details-book/details-book.component';
import { ListBooksComponent } from './component/admin/list-books/list-books.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { Page404Component } from './component/page404/page404.component';


//services
import { DataApiService } from './services/data-api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OffersComponent,
    HeroComponent,
    DetailsBookComponent,
    ListBooksComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
