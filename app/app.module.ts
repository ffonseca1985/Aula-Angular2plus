import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule  } from "@angular/platform-browser";
//export => visivel em outros arquivos

//components
import { AppComponent } from './shared/components/app.component';
import { AppComponents, AppRouteModule } from './config/route.config';

//Providers
import { ProfessorResolver } from './professor/shared/ProfessorResolver';
import { ProfessorService } from './professor/shared/professorService';

//analogo a um data annotation
@NgModule({
    imports: [FormsModule, RouterModule, HttpModule, 
    BrowserModule, AppRouteModule],
    declarations: AppComponents, //array de componentes => todo componente é necessário registra-lo
    bootstrap: [AppComponent], //componente Inicial (Master)
    providers: [ProfessorService, ProfessorResolver]
})
export class AppModule {

}