import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './Navigation/nav-bar/nav-bar.component';
import { HomePageComponent } from './Pages/Home/home-page/home-page.component';
import { UserListComponent } from './Pages/user-list/user-list.component';
import { UserUpdateComponent } from './Pages/user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    UserListComponent,
    UserUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
