

//1 - app.main => inicializa a aplicação

//2 - minha aplicação precisa de um módulo 
//(igual ao Angular 1)

//3 - modulo raíz

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

//loading do modulo raiz...
platformBrowserDynamic().bootstrapModule(AppModule);