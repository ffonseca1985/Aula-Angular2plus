
import { Component } from '@angular/core';


@Component({
    templateUrl: './app/home/components/home.html',
    selector: 'home'
})
export class HomeComponent {

    descricao: string = 'teste..';

    testeDatabind : TestDataBind = 
        new TestDataBind("valor qualquer")

    clickBtn() {
        alert('btn clicado');
    }

    inputValor(valor) : void{
        //valor => valor do input
        this.testeDatabind.descricao = valor;
    }

    setValorReferencia(valor) : void{
        //valor => valor do input via referência
        this.testeDatabind.descricao = valor;
    }
}

class TestDataBind {
    
    constructor(public descricao: string) {
    }
}