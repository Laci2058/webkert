import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private router: Router, private AuthService: AuthService) { }

    ngOnInit(): void {
        this.AuthService.isUserLoggedIn().subscribe(user => {
            console.log(user)
            this.loggedInUser = user
            localStorage.setItem('user', JSON.stringify(this.loggedInUser))
        }, error => {
            console.error(error)
            localStorage.setItem('user', JSON.stringify('null'))
        })
    }

    title = 'reflex_test';

    loggedInUser?: firebase.default.User | null

    logout() {
        this.AuthService.signout().then(() => {
            console.log('kijelentkezve');

        }).catch(error => {
            console.error(error)
        })
    }
}
