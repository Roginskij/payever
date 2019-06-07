import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class PaginationUsersResolver {

  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const page: number = route.queryParams['page'] || 1;
    return this.apiService.fetchPaginationInfo(page);
  }

}
