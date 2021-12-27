import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CouseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: 'xxx',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 2, 2021'
            },
            {
                id: 1,
                name: 'Angular: Htpp',
                imageUrl: 'xxx',
                price: 45.99,
                code: 'XPS-8799',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 4, 2021'
            }
        ];
    }

}