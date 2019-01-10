//Antes de ir no componente
//iremos resolver/ mostrar os dados do professor
//para evitar tela branca!!!
System.register(['@angular/core', './professorService'], function(exports_1, context_1) {
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
    var core_1, professorService_1;
    var ProfessorResolver;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (professorService_1_1) {
                professorService_1 = professorService_1_1;
            }],
        execute: function() {
            ProfessorResolver = class ProfessorResolver {
                constructor(professorService) {
                    this.professorService = professorService;
                }
                resolve(route, state) {
                    let id = route.params['id'];
                    return this.professorService.getById(id);
                }
            };
            ProfessorResolver = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [professorService_1.ProfessorService])
            ], ProfessorResolver);
            exports_1("ProfessorResolver", ProfessorResolver);
        }
    }
});
