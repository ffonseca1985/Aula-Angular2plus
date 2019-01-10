System.register(['@angular/core', '@angular/forms', '@angular/router', '@angular/http', "@angular/platform-browser", './shared/components/app.component', './config/route.config', './professor/shared/ProfessorResolver', './professor/shared/professorService'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, http_1, platform_browser_1, app_component_1, route_config_1, ProfessorResolver_1, professorService_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (route_config_1_1) {
                route_config_1 = route_config_1_1;
            },
            function (ProfessorResolver_1_1) {
                ProfessorResolver_1 = ProfessorResolver_1_1;
            },
            function (professorService_1_1) {
                professorService_1 = professorService_1_1;
            }],
        execute: function() {
            //analogo a um data annotation
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [forms_1.FormsModule, router_1.RouterModule, http_1.HttpModule,
                        platform_browser_1.BrowserModule, route_config_1.AppRouteModule],
                    declarations: route_config_1.AppComponents,
                    bootstrap: [app_component_1.AppComponent],
                    providers: [professorService_1.ProfessorService, ProfessorResolver_1.ProfessorResolver]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
