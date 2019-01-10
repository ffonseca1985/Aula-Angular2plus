System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var HomeComponent, TestDataBind;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = class HomeComponent {
                constructor() {
                    this.descricao = 'teste..';
                    this.testeDatabind = new TestDataBind("valor qualquer");
                }
                clickBtn() {
                    alert('btn clicado');
                }
                inputValor(valor) {
                    //valor => valor do input
                    this.testeDatabind.descricao = valor;
                }
                setValorReferencia(valor) {
                    //valor => valor do input via referência
                    this.testeDatabind.descricao = valor;
                }
            };
            HomeComponent = __decorate([
                core_1.Component({
                    templateUrl: './app/home/components/home.html',
                    selector: 'home'
                }), 
                __metadata('design:paramtypes', [])
            ], HomeComponent);
            exports_1("HomeComponent", HomeComponent);
            TestDataBind = class TestDataBind {
                constructor(descricao) {
                    this.descricao = descricao;
                }
            };
        }
    }
});
