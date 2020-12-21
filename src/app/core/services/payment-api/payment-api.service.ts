import { BaseService } from '../base-api.service'
import { apiURLs } from '../api-urls.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PaymentApiService extends BaseService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);

  }
  ShowAllPayment() {
    return this.gets(apiURLs.topbarBanner)
  }
}