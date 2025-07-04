import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
    standalone: false,
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  filter : string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userService.getAllUsers();
    this.filterUsers();
  }

  filterUsers() {
    const search = this.filter.toLowerCase();
    this.filteredUsers = this.users.filter(u =>
      `\${u.firstName} \${u.lastName} \${u.email}\`.toLowerCase().includes(search)`
    );
  }

  deleteUser(email: string) {
    this.userService.deleteUser(email);
    this.loadUsers();
  }

  goToEdit(email: string) {
    this.router.navigate(['/edit', email]);
  }

   createNewUser() {
    this.router.navigate(['/create']);
  }
}