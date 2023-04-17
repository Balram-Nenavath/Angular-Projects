import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Balram'
    },
    {
      id: 2,
      name: 'Sairam'
    },
    {
      id: 3,
      name: 'SaiKishore'
    }
  ];
}
