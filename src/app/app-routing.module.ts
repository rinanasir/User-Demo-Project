import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/Home/home-page/home-page.component';
import { UserListComponent } from './Pages/user-list/user-list.component';
import { UserUpdateComponent } from './Pages/user-update/user-update.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "userList", component: UserListComponent },
  { path: "updateUser", component: UserUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
