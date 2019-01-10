

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Link } from '../models/link';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


//estamos informando que classe não precisará
//ser instanciada e sim injetada
@Injectable() 
export class LinkService {

    constructor(private http: Http) {
    }

    private api : string = './app/shared/data/link.json';


    get() : Promise<Array<Link>> {

        return this.http.get(this.api)
            .toPromise()
            .then(this.getData)
            .catch(x => { throw x;} );
    }


    private getData(response: Response) : Array<Link>{
        
        var data = response.json();
        var links = new Array<Link>();

        for (var index = 0; index <data.length; index++) {
            var link = data[index];
            links.push(new Link(link.nome, link.rota));
        }

        return links;
    }
}