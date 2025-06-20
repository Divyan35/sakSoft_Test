import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFormModule } from './components/user-form/user-form.module';
import { UserListModule } from './components/user-list/user-list.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,UserFormModule,UserListModule]
})
export class AppComponent {
  title = 'frontend';
}
