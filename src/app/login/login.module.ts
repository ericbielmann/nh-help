import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
    imports: [
        LoginRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [LoginComponent],
    providers: []
})
export class LoginModule { }