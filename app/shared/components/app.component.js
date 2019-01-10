//O que um componente??
//Resp. uma classe e um html
System.register(['@angular/core', '../services/linkService'], function(exports_1, context_1) {
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
    var core_1, linkService_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (linkService_1_1) {
                linkService_1 = linkService_1_1;
            }],
        execute: function() {
            //data annotation para informar que Component
            AppComponent = class AppComponent {
                constructor(linkService) {
                    this.linkService = linkService;
                    linkService.get()
                        .then((x) => {
                        this.links = x;
                    }).catch(erro => alert(erro));
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app-component',
                    templateUrl: './app/shared/components/app.component.html',
                    providers: [linkService_1.LinkService]
                }), 
                __metadata('design:paramtypes', [linkService_1.LinkService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
