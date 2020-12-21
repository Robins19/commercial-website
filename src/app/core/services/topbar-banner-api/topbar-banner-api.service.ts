import { BaseService } from '../base-api.service'
import { apiURLs } from '../api-urls.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ShowAllTopbarBannerApiService extends BaseService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);

  }
  ShowAllBanner() {
    return this.gets(apiURLs.topbarBanner)
  }
}