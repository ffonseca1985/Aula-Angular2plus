System.register(['@angular/core', '../shared/professorService', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, professorService_1, router_1;
    var ProfessorListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (professorService_1_1) {
                professorService_1 = professorService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProfessorListComponent = class ProfessorListComponent {
                constructor(professorService, activatedRoute) {
                    this.professorService = professorService;
                    this.activatedRoute = activatedRoute;
                    //use sempre snapshot para dados estáticos
                    this.titulo = this.activatedRoute.snapshot.data["titulo"];
                    console.log(this.titulo);
                    this.professorService.get()
                        .subscribe((x) => this.professores = x, //success
                        (error) => alert(error), //fail
                        () => { console.log('Acabou'); } //complete
                    );
                }
            };
            ProfessorListComponent = __decorate([
                core_1.Component({
                    selector: 'professor-list',
                    templateUrl: './app/professor/list/list.html',
                    providers: [professorService_1.ProfessorService]
                }), 
                __metadata('design:paramtypes', [professorService_1.ProfessorService, router_1.ActivatedRoute])
            ], ProfessorListComponent);
            exports_1("ProfessorListComponent", ProfessorListComponent);
        }
    }
});
