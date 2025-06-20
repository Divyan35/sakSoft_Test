import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CountryService } from '../../services/country.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
    standalone  : false
})
export class UserFormComponent implements OnInit {
  form: FormGroup;
  countries: string[] = [];
  editMode : boolean = false;
  originalEmail: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
    });
  }

  ngOnInit() {
    const email = this.route.snapshot.paramMap.get('email');
    this.editMode = !!email;
    if (email) {
      const user = this.userService.getUserByEmail(email);
      if (user) {
        this.form.patchValue(user);
        this.originalEmail = user.email;
      }
    }

    this.countryService.getCountries().subscribe((ele:any) => {
      this.countries = ele?.data?.map((c:any) => c.country).sort();
    });
  }

  onSubmit() {
    const formValue = this.form.value;
    const user: User = {
      ...formValue,
      createdAt: this.editMode ? this.userService.getUserByEmail(this.originalEmail)?.createdAt || new Date().toISOString() : new Date().toISOString()
    };
    if (this.editMode) {
      this.userService.updateUser(this.originalEmail, user);
    } else {
      this.userService.addUser(user);
    }
    this.router.navigate(['/']);
  }
}