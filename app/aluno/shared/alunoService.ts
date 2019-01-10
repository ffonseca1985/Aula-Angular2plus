import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunoService {

    alunos: Array<Aluno>;

    constructor() {
        this.alunos = new Array<Aluno>();
    }

    get() {

        this.alunos.push(new Aluno(1, 'fabio', 'ffonseca@gmail.com'));
        this.alunos.push(new Aluno(2, 'maria', 'maria@gmail.com'));

        return new Promise((resolve, reject) => { 
            resolve(this.alunos) });
    }

    getById(id:number){

        var alunos = this.alunos;

        for (var index = 0; index < alunos.length; index++) {
            if (alunos[index].id == id)
                return alunos[index];
            
        }
    }
}