System.register(['@angular/router', '../shared/components/app.component', '../home/components/home.component', '../aluno/list/aluno.component', '@angular/core', '../aluno/details/details.component', '../professor/list/list.component', "../professor/details/details.component", "../professor/shared/ProfessorResolver"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, app_component_1, home_component_1, aluno_component_1, core_1, details_component_1, list_component_1, details_component_2, ProfessorResolver_1;
    var routes, AppRouteModule, AppComponents;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (aluno_component_1_1) {
                aluno_component_1 = aluno_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (details_component_1_1) {
                details_component_1 = details_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (details_component_2_1) {
                details_component_2 = details_component_2_1;
            },
            function (ProfessorResolver_1_1) {
                ProfessorResolver_1 = ProfessorResolver_1_1;
            }],
        execute: function() {
            //no angular 1 => rota é modulo
            //aqui é a mesma coisa
            //receita de bolo
            routes = [
                { path: '', redirectTo: 'home', pathMatch: "full" },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'aluno', component: aluno_component_1.AlunoListComponent },
                { path: 'professor', component: list_component_1.ProfessorListComponent,
                    data: {
                        titulo: 'Lista de Professores'
                    }
                },
                { path: 'professor/details/:id', component: details_component_2.ProfessorDetailsComponent,
                    data: {
                        titulo: 'Detalhe do Professor'
                    },
                    resolve: {
                        professor: ProfessorResolver_1.ProfessorResolver
                    }
                }
            ];
            //{ useHash: true }
            AppRouteModule = class AppRouteModule {
            };
            AppRouteModule = __decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
                    exports: [router_1.RouterModule]
                }), 
                __metadata('design:paramtypes', [])
            ], AppRouteModule);
            exports_1("AppRouteModule", AppRouteModule);
            exports_1("AppComponents", AppComponents = [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                aluno_component_1.AlunoListComponent,
                details_component_1.AlunoDetailsComponent,
                list_component_1.ProfessorListComponent,
                details_component_2.ProfessorDetailsComponent
            ]);
        }
    }
});
