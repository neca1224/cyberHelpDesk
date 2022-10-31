import { Component, OnInit } from '@angular/core';
import { Representative, User } from './interfaces/user';
import { UserService } from './userService';

@Component({
  selector: 'chd-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  customers!: User[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCustomersLarge().subscribe(customers => {
      this.customers = customers;
      this.loading = false;
      
console.log(this.customers)

      this.customers.forEach(
        customer => {
          if (customer.date) {
            (customer.date = new Date(customer.date))
          }
        }
      );
    });
  }

  handleInput(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
 
}
