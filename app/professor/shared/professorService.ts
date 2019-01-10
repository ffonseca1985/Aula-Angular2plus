
import {Injectable} from '@angular/core';
import { Professor } from './professor';

import { Http, Response  } from '@angular/http';

//Uma estrutura melhorado do promise
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';

@Injectable()
export class ProfessorService{

    private urlApi = "./app/professor/shared/professor.json";

    constructor(private http: Http) {
    }

    //NOVIDADE!!!
    //Podemos retornar mais de um tipo
    get() : Observable<Array<Professor>> | null{
        
            return this.http.get(this.urlApi)
                        .map(this.professorData)
                        .do( x => console.log(x))
                        .catch(this.professorError)
                        .finally(() => {console.log('Acabou!!!')});
    }

    getById(id:number) : Observable<Professor>{

        return this.get().map(x=> {
            
            var item = null;
            for(var i = 0; i < x.length; i++){
                if (x[i].id == id){
                     item =  x[i];
                }
            }
            return item;
        });
   }

    private professorData(response: Response) {
        
        var professores : Array<Professor> = new Array<Professor>();
        var dados = response.json();

        for(var i = 0; i < dados.length; i++){
             var professor = new Professor(dados[i].id, dados[i].nome, dados[i].email,
                                           dados[i].salario);
             professores.push(professor);
        } 

        return professores;    
   }

   private professorError(error :Response){
        return Observable.throw("erro ao solicitar o professor");
   }

}
