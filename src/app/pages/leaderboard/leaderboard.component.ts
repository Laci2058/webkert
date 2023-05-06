import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/user';
import { UserService } from '../../shared/services/user.service';

export interface PeriodicElement {
    name: string;
    position: number;
    time: number;
}

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.scss']
})

export class LeaderboardComponent implements OnInit {

    constructor(private userService: UserService) { }
    ngOnInit(): void {
        this.getUsersData()
    }

    userdata: User[] = []

    getUsersData() {
        this.userService.getAll().subscribe(users => {
            users.forEach(user => {
                if (user.record !== '') {
                    let date = user.date.split('T')
                    let user_record = {
                        username: user.username,
                        record: user.record,
                        date: date[0],
                        email: user.email,
                        id: user.id
                    }
                    this.userdata.push(user_record)
                }
            })
            this.userdata.sort((a, b) => parseInt(a.record) < parseInt(b.record) ? -1 : 1)
        })
    }

}
