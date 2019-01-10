System.register(['@angular/core', '../shared/alunoService'], function(exports_1, context_1) {
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
    var core_1, alunoService_1;
    var AlunoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (alunoService_1_1) {
                alunoService_1 = alunoService_1_1;
            }],
        execute: function() {
            AlunoListComponent = class AlunoListComponent {
                constructor(alunoService) {
                    this.alunoService = alunoService;
                    alunoService.get()
                        .then((x) => {
                        this.alunos = x;
                    });
                }
                callbackPai(event) {
                    alert(event);
                }
                getAlunoSelecionado(id) {
                    //pegando o id
                    this.alunoSelecionado =
                        this.alunoService.getById(id);
                }
            };
            AlunoListComponent = __decorate([
                core_1.Component({
                    selector: 'aluno-list',
                    templateUrl: './app/aluno/list/list.html',
                    providers: [alunoService_1.AlunoService]
                }), 
                __metadata('design:paramtypes', [alunoService_1.AlunoService])
            ], AlunoListComponent);
            exports_1("AlunoListComponent", AlunoListComponent);
        }
    }
});
