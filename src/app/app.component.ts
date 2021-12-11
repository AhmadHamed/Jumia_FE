import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Customer} from "../models/customer.model";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Jumia phone validator';
  countryFilter: string;
  stateFilter: boolean;
  public displayedColumns: string[] = ['Phone', 'CountryCode', 'Country', 'State'];
  public dataSource = new MatTableDataSource<Customer>();

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers(country?: string, state?: boolean): void {
    this.customerService.getCustomers(country, state).subscribe(result => {
      this.dataSource.data = result as Customer[];
    });
  }

  filter(): void {
    this.getCustomers(this.countryFilter, this.stateFilter);
  }

  reset(): void {
    this.countryFilter = undefined;
    this.stateFilter = undefined;
    this.getCustomers();
  }
}
