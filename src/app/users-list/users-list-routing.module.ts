import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { PaginationUsersResolver } from './resolvers/pagination.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      data: PaginationUsersResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    component: UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersListRoutingModule { }
