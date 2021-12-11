import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerModel} from "../models/customer.model";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  httpClient: HttpClient;

  getCustomers(country?: string, state?: boolean): Observable<CustomerModel> {
    let params = new HttpParams();
    params.append("country", country);
    params.append("state", String(state));

    return this.httpClient.get<CustomerModel>(environment.JUMIA_BE_URL, {params: params});
  }
}
