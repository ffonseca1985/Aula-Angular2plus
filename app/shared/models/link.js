System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Link;
    return {
        setters:[],
        execute: function() {
            Link = class Link {
                constructor(nome, rota) {
                    this.nome = nome;
                    this.rota = rota;
                }
            };
            exports_1("Link", Link);
        }
    }
});
