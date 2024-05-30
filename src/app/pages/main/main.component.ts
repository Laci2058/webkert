import { HostListener, Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
    game_status = false
    start_new_game = true
    start_time = 0
    end_time = 0
    to_end_the_game: NodeJS.Timeout | undefined
    to_start_the_game: NodeJS.Timeout | undefined
    reaction_time = ''
    stop = ''
    user_best_time: string = ""
    auth_sub: Subscription = new Subscription
    img_src="assets/green_light.png"

    @HostListener('window:keydown.space', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        if (this.game_status === true) {
            this.end_game()
        } else if (this.start_new_game === false) {
            this.start_new_game = true
            this.img_src="assets/green_light.png"
        }
        else {
            this.start_game()
            this.start_new_game = false
            this.img_src="assets/yellow_light.png"
        }
    }

    constructor(private userService: UserService, private AuthService: AuthService) { }

    ngOnDestroy(): void {

    }

    ngOnInit(): void {
        this.AuthService.isUserLoggedIn().subscribe(user => {
            this.userService.getById(user?.uid).subscribe(data => {
                this.user_best_time = data[0].record
            })
        })
    }

    start_game() {
        let change_time = (Math.floor(Math.random() * 3) + 2) * 1000
        let timeout = change_time + 6000
        this.start_time = 0
        this.reaction_time = ''
        this.game_status = true

        this.to_start_the_game = setTimeout(() => {
            this.start_time = new Date().getTime()
            this.stop = 'STOP'
            this.img_src="assets/red_light.png"
        }, change_time)


        this.to_end_the_game = setTimeout(() => {
            this.end_game()
        }, timeout)
    }

    end_game() {
        this.end_time = new Date().getTime()
        this.game_status = false
        this.stop = ''

        if (this.start_time === 0) {
            this.reaction_time = 'Too early! You lost!'
        } else {
            let current_time = `${this.end_time - this.start_time}`

            if (this.user_best_time === "" || parseInt(current_time) < parseInt(this.user_best_time)) {
                this.updateUser(current_time)
                this.reaction_time = "New Record" + "\n" + ` Your reaction time: ${current_time}ms`
            } else {
                this.reaction_time = `Your reaction time: ${current_time}ms`
            }
        }
        clearTimeout(this.to_end_the_game)
        clearTimeout(this.to_start_the_game)
    }

    updateUser(current_time: string) {
        this.AuthService.isUserLoggedIn().subscribe(user => {
            this.userService.update(user?.uid, current_time)
        })
    }
}