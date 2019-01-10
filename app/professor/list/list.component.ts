
import { Component } from '@angular/core';
import {Professor} from '../shared/professor';
import {ProfessorService} from '../shared/professorService';

//Para selecionar parametros da rota sempre buscamos
//da rota ativa/ atual
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'professor-list',
    templateUrl: './app/professor/list/list.html',
    providers: [ProfessorService]
})
export class ProfessorListComponent {

    professores: Array<Professor>;
    titulo: string;

    constructor(private professorService : ProfessorService, 
                private activatedRoute: ActivatedRoute)  
    {
        //use sempre snapshot para dados estáticos
        this.titulo = this.activatedRoute.snapshot.data["titulo"];

        console.log(this.titulo)

        this.professorService.get()
            .subscribe(
                (x : Array<Professor>) => this.professores = x, //success
                (error) => alert(error), //fail
                () => { console.log('Acabou');} //complete
            );
    }
}