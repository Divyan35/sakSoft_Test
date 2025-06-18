import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private storageKey = 'users';

  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getUserByEmail(email: string): User | undefined {
    return this.getAllUsers().find(user => user.email === email);
  }

  addUser(user: User): void {
    const users = this.getAllUsers();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  updateUser(email: string, updated: User): void {
    const users = this.getAllUsers().map(user => user.email === email ? updated : user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  deleteUser(email: string): void {
    const users = this.getAllUsers().filter(user => user.email !== email);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}