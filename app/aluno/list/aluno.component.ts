
import { Component } from '@angular/core';
import { Aluno } from '../shared/aluno';
import { AlunoService} from '../shared/alunoService';

@Component({
    selector:'aluno-list',
    templateUrl: './app/aluno/list/list.html',
    providers: [AlunoService]
})
export class AlunoListComponent
{
    alunos: Array<Aluno>;
    
    alunoSelecionado: Aluno;

    constructor(private alunoService: AlunoService) {
        
        alunoService.get()
            .then((x : Array<Aluno>) => {
                this.alunos = x
            });
    }

    callbackPai(event){
        alert(event);
    }

    getAlunoSelecionado(id: number){
        //pegando o id
       this.alunoSelecionado = 
            this.alunoService.getById(id);   
    }
}