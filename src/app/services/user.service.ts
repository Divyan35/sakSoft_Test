import { Injectable, PLATFORM_ID, Inject} from '@angular/core';
import { User } from '../models/user.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  private storageKey = 'users';

  getAllUsers(): User[] {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    }
    return [];
  }

  getUserByEmail(email: string): User | undefined {
    if (isPlatformBrowser(this.platformId)) {
      return this.getAllUsers().find(user => user.email === email);
    }
    return undefined;
  }

  addUser(user: User): void {
    const users = this.getAllUsers();
    users.push(user);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    }
  }

  updateUser(email: string, updated: User): void {
    const users = this.getAllUsers().map(user => user.email === email ? updated : user);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    }
  }

  deleteUser(email: string): void {
    const users = this.getAllUsers().filter(user => user.email !== email);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    }
  }
}