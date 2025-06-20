import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CountryService } from '../../services/country.service';

@NgModule({
  declarations: [UserFormComponent],
  imports: [ReactiveFormsModule, CommonModule],
  providers: [UserService, CountryService, FormBuilder],
  exports: [UserFormComponent]
})
export class UserFormModule { }
