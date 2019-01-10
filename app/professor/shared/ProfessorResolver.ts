//Antes de ir no componente
//iremos resolver/ mostrar os dados do professor
//para evitar tela branca!!!

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Professor } from './professor';
import { Observable } from "rxjs/Observable";

import { ProfessorService } from './professorService';

@Injectable()
export class ProfessorResolver 
        implements Resolve<Professor>{

   constructor(private professorService: ProfessorService) {
   }         

    resolve(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot): 
            Professor | Observable<Professor> | Promise<Professor> {

        let id : number = <number>route.params['id'];

        return this.professorService.getById(id);
    }

}