System.register(['@angular/core', '../shared/aluno'], function(exports_1, context_1) {
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
    var AlunoDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aluno_1_1) {
                aluno_1 = aluno_1_1;
            }],
        execute: function() {
            AlunoDetailsComponent = class AlunoDetailsComponent {
                constructor() {
                    //o evento que o componente filho enviará ao componente pai
                    this.filhoEvent = new core_1.EventEmitter();
                }
                //eventHandler => o manipulado do evento
                enviarEventoPai() {
                    this.filhoEvent.emit('enviar qualquer coisa');
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', aluno_1.Aluno)
            ], AlunoDetailsComponent.prototype, "aluno", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], AlunoDetailsComponent.prototype, "filhoEvent", void 0);
            AlunoDetailsComponent = __decorate([
                core_1.Component({
                    selector: 'aluno-details',
                    templateUrl: './app/aluno/details/details.html'
                }), 
                __metadata('design:paramtypes', [])
            ], AlunoDetailsComponent);
            exports_1("AlunoDetailsComponent", AlunoDetailsComponent);
        }
    }
});
