import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path: '',
  redirectTo: 'users',
  pathMatch: 'full'
},
{
  path: 'users',
  loadChildren: './users-list/users-list.module#UsersListModule'
},
{
  path: 'user',
  loadChildren: './user/user.module#UserModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
