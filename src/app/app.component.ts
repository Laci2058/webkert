import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    auth_sub: Subscription = new Subscription

    constructor(private router: Router, private AuthService: AuthService) { }

    ngOnDestroy(): void {
        this.auth_sub.unsubscribe()
    }

    ngOnInit(): void {
       this.auth_sub = this.AuthService.isUserLoggedIn().subscribe(user => {
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
        }).catch(error => {
            console.error(error)
        })
    }
}
