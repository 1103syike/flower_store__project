import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { LoginForm } from './login-form/login-form.component';
import { FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent,LoginForm,FormField],
  template: `
    <app-header></app-header>
    <app-login-form></app-login-form>
    `,
  styleUrl: './login.page.css',
})
export class LoginPage {

}
