

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../shared/components/app.component';
import { HomeComponent  } from  '../home/components/home.component'      
import { AlunoListComponent } from '../aluno/list/aluno.component';
//import ngModule => indicar que é module
import { NgModule } from '@angular/core';
import { AlunoDetailsComponent } from '../aluno/details/details.component';
import { ProfessorListComponent } from '../professor/list/list.component';
import { ProfessorDetailsComponent } from "../professor/details/details.component";
import { ProfessorResolver } from "../professor/shared/ProfessorResolver";


//no angular 1 => rota é modulo
//aqui é a mesma coisa

//receita de bolo
const routes : Routes = [
    {path: '', redirectTo: 'home', pathMatch: "full" },
    {path: 'home', component: HomeComponent },
    {path: 'aluno', component: AlunoListComponent},
    {path: 'professor', component: ProfessorListComponent,
             data: {
                 titulo: 'Lista de Professores'
             } 
    },
    {path: 'professor/details/:id', component: ProfessorDetailsComponent,
        data: {
            titulo: 'Detalhe do Professor'
        },
        resolve: {
            professor: ProfessorResolver
        }
    }

    //professor/detais/1
];
//{ useHash: true }
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]

})
export class AppRouteModule{
}
export const AppComponents = [
    AppComponent,
    HomeComponent,
    AlunoListComponent,
    AlunoDetailsComponent,
    ProfessorListComponent,
    ProfessorDetailsComponent
];