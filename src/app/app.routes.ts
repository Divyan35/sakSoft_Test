import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';


export const routes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'create', component: UserFormComponent },
    { path: 'edit/:email', component: UserFormComponent },
];