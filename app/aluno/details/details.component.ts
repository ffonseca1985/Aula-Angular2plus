

import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Aluno } from '../shared/aluno';

@Component({
    selector: 'aluno-details',
    templateUrl: './app/aluno/details/details.html'
})
export class AlunoDetailsComponent {
 
    //O que recebemos é um input
    //@Input("Aluno123") => alias
    @Input() aluno : Aluno;

    //o evento que o componente filho enviará ao componente pai
    @Output() filhoEvent = new EventEmitter();

    //eventHandler => o manipulado do evento
    enviarEventoPai(){
        this.filhoEvent.emit('enviar qualquer coisa');
    }


    







}