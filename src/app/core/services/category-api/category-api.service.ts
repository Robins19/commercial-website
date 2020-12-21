import { BaseService } from '../base-api.service'
import { apiURLs } from '../api-urls.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CategoryApiService extends BaseService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);

  }
  ShowAllCategory() {
    return this.gets(apiURLs.allCategory)
  }
}