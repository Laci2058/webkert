import { HostListener, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    game_status = false
    start_new_game = true
    start_time = 0
    end_time = 0
    to_end_the_game: NodeJS.Timeout | undefined
    to_start_the_game: NodeJS.Timeout | undefined
    reaction_time = ''

    @HostListener('window:keydown.space', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        if (this.game_status === true) {
            this.end_game()
        } else if (this.start_new_game === false) {
            this.start_new_game = true
        }
        else {
            this.start_game()
            this.start_new_game = false
        }
    }

    constructor() { }

    ngOnInit(): void {
    }

    start_game() {
        let change_time = (Math.floor(Math.random() * 3) + 2) * 1000
        let end_time = change_time + 6000
        this.start_time = 0
        this.game_status = true

        this.to_start_the_game = setTimeout(() => {
            let start_date = new Date()
            this.start_time = start_date.getTime()

            console.log('amogus')
        }, change_time)


        this.to_end_the_game = setTimeout(() => {
            this.end_game()
            console.log('vége');

        }, end_time)
    }

    end_game() {
        let end_date = new Date()
        this.end_time = end_date.getTime()
        this.game_status = false


        if (this.start_time === 0) {
            this.reaction_time = 'Too early! You lost!'
            console.log('Too early! You lost!');

        } else {
            console.log(this.end_time - this.start_time);

            this.reaction_time = `Your reaction time: ${this.end_time - this.start_time}ms`
        }

        clearTimeout(this.to_end_the_game)
        clearTimeout(this.to_start_the_game)
    }

}