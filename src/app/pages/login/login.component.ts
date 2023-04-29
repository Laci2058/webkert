import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
    }

    pw_hide = true
    password = new FormControl('', [Validators.required])
    email = new FormControl('', [Validators.required])



    login() {
        this.authService.login(this.email.value, this.password.value).then(cred => {
            this.router.navigateByUrl('/main')
            console.log('bejelentkezve');

        }).catch(error => {
            console.error(error)
        })
    }


    getRequiredError() {
        return this.password.hasError('required') ? 'You must enter a value' : ''
    }
    getEmailError() {
        if (this.email.hasError('required')) {
            return 'You must enter a value'
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }


}
