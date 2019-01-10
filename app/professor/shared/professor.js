System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Professor;
    return {
        setters:[],
        execute: function() {
            Professor = class Professor {
                constructor(id, nome, email, salario) {
                    this.id = id;
                    this.nome = nome;
                    this.email = email;
                    this.salario = salario;
                }
            };
            exports_1("Professor", Professor);
        }
    }
});
