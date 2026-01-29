import { Component, signal } from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import { AuthService } from '../../../user';

interface LoginData {
    email: string;
    password: string;
}

@Component({
    selector: 'app-login-form',
    imports: [FormField, MatFormFieldModule, MatInputModule, MatButtonModule],
    templateUrl: './login-form.component.html',
    styleUrl: './login-form.component.css',
})
export class LoginForm {
    loginModel = signal<LoginData>({
        email: '',
        password: '',
    });

    loginForm = form(this.loginModel);

    onLogin() {
        if (this.loginForm.email().value() === "1103syike@gmail.com") {
            alert('你是管理員')
        } else {
            alert('你不是管理員')
        }
    }


}
