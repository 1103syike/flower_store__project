import { Routes } from '@angular/router';
import { IndexPage } from './page/index/index.page';
import { LoginPage } from './page/login/login.page';

export const routes: Routes = [
    { path: '', component: IndexPage },
    { path: 'login', component: LoginPage }
];
