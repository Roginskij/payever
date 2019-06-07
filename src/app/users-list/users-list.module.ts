import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { PaginationUsersResolver } from './resolvers/pagination.resolver';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    PaginationUsersResolver
  ]
})
export class UsersListModule { }
