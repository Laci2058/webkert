import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { LeaderboardComponent } from './leaderboard.component';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
    declarations: [
        LeaderboardComponent
    ],
    imports: [
        CommonModule,
        LeaderboardRoutingModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class LeaderboardModule { }
