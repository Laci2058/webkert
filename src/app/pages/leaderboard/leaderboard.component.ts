import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
    name: string;
    position: number;
    time: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', time: 1.0079 },
    { position: 2, name: 'Helium', time: 4.0026 },
    { position: 3, name: 'Lithium', time: 6.941 },
    { position: 4, name: 'Beryllium', time: 9.0122 },
    { position: 5, name: 'Boron', time: 10.811 },
    { position: 6, name: 'Carbon', time: 12.0107 },
    { position: 7, name: 'Nitrogen', time: 14.0067 },
    { position: 8, name: 'Oxygen', time: 15.9994 },
    { position: 9, name: 'Fluorine', time: 18.9984 },
    { position: 10, name: 'Neon', time: 20.1797 },
    { position: 11, name: 'Sodium', time: 22.9897 },
    { position: 12, name: 'Magnesium', time: 24.305 },
    { position: 13, name: 'Aluminum', time: 26.9815 },
    { position: 14, name: 'Silicon', time: 28.0855 },
    { position: 15, name: 'Phosphorus', time: 30.9738 },
    { position: 16, name: 'Sulfur', time: 32.065 },
    { position: 17, name: 'Chlorine', time: 35.453 },
    { position: 18, name: 'Argon', time: 39.948 },
    { position: 19, name: 'Potassium', time: 39.0983 },
    { position: 20, name: 'Calcium', time: 40.078 },
];

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.scss']
})


export class LeaderboardComponent implements AfterViewInit {

    constructor() { }

    displayedColumns: string[] = ['position', 'name', 'time'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator:any = MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}
