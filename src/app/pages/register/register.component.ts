import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
    }

    pw_hide = true;
    rpw_hide = true

    email = new FormControl('', [Validators.required, Validators.email])
    username = new FormControl('', [Validators.required])
    password = new FormControl('', [Validators.required])
    repassword = new FormControl('', [Validators.required])


    signup() {
        return this.authService.signup(this.email.value, this.password.value).then(cred => {
            this.router.navigateByUrl('/main')
        }).catch(error => {
            console.error(error)
        })
    }


    getRequiredError() {
        if (this.username.hasError('required')) {
            return 'You must enter a value'
        }
        if (this.password.hasError('required')) {
            return 'You must enter a value'
        }
        if (this.repassword.hasError('required')) {
            return 'You must enter a value'
        }
        return ''
    }

    getEmailError() {
        if (this.email.hasError('required')) {
            return 'You must enter a value'
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }
}
