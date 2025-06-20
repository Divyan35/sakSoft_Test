import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserListComponent } from './user-list.component';


@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  exports: [UserListComponent]
})
export class UserListModule { }
