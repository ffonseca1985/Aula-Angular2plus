//O que um componente??
//Resp. uma classe e um html

import { Component } from '@angular/core';
import { LinkService} from '../services/linkService';
import { Link } from '../models/link';

//data annotation para informar que Component
@Component({
    selector: 'app-component',
    templateUrl: './app/shared/components/app.component.html',
    providers:[LinkService]
})
export class AppComponent {

    links: Array<Link>;

    constructor(private linkService: LinkService ) 
    { 
        linkService.get()
            .then((x : Array<Link>) => {
                this.links = x;
            }).catch(
                erro => alert(erro)
            );   
    }
}