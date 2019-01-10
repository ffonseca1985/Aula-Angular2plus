System.register(['@angular/core', './aluno'], function(exports_1, context_1) {
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
    var core_1, aluno_1;
    var AlunoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aluno_1_1) {
                aluno_1 = aluno_1_1;
            }],
        execute: function() {
            AlunoService = class AlunoService {
                constructor() {
                    this.alunos = new Array();
                }
                get() {
                    this.alunos.push(new aluno_1.Aluno(1, 'fabio', 'ffonseca@gmail.com'));
                    this.alunos.push(new aluno_1.Aluno(2, 'maria', 'maria@gmail.com'));
                    return new Promise((resolve, reject) => {
                        resolve(this.alunos);
                    });
                }
                getById(id) {
                    var alunos = this.alunos;
                    for (var index = 0; index < alunos.length; index++) {
                        if (alunos[index].id == id)
                            return alunos[index];
                    }
                }
            };
            AlunoService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], AlunoService);
            exports_1("AlunoService", AlunoService);
        }
    }
});
