import { Component } from '@angular/core';
import { Professor } from "../shared/professor";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector: 'professor-details',
    templateUrl: './app/professor/details/details.html'
})
export class ProfessorDetailsComponent {

    constructor(private activatedRoute: ActivatedRoute,
                private route: Router) {

          this.titulo = activatedRoute.snapshot.data["titulo"];
    }

    professor: Professor;
    titulo: string;

    ngOnInit() {
        
        //domain/prof/details/1
        //domain/prof/details/2
        this.activatedRoute.data.subscribe(
            data => this.professor = data["professor"]
        );
    }
}       