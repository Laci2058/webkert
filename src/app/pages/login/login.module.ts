import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ]
})
export class LoginModule { }
