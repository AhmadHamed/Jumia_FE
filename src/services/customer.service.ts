import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer.model";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  httpClient: HttpClient;

  getCustomers(country?: string, state?: boolean): Observable<Customer[]> {
    let params = new HttpParams();
    params = country ? params.append("country", country) : params;
    params = state ? params.append("state", String(state)) : params;

    return this.httpClient.get<Customer[]>(environment.JUMIA_BE_URL, {params: params});
  }
}
