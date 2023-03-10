# HeroesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Sección 12: HeroesApp - Rutas hijas y Lazyload

¿Qué veremos en esta sección?
Este es un breve listado de los temas fundamentales:

- Rutas Hijas
- Rutas Principales
- LazyLoad
- Multiples estilos en la misma SPA

Esta sección es fundamental para seguir el curso, ya que de aquí en adelante, implementaremos la carga perezosa en cada módulo principal de las futuras aplicaciones que haremos.

Comprender el Lazyload no es difícil, y la forma como lo veremos aquí nos ayudará a manejar los dos posibles casos de uso. Uno de ellos es cuando la ruta hija no tiene estilo especial y otra en la que requiere un estilo diferente por cada módulo.