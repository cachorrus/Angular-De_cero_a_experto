# FormulariosApp

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

## Sección 16: Formularios - Template y Lazyload

¿Qué veremos en esta sección?
Este es un breve listado de los temas fundamentales:

- Template driven
- ViewChild
- Two way databinding
- Formularios dinámicos
- Checks, radios y switches
- Directivas personalizadas - Nota: este tema se cubre a profundidad después en una sección especializada
- Manejo del formulario y validaciones
- Encapsular módulos y scope de los mismos

Este es un tema fundamental, pero no es el único, hay varias formas de manejar el estado de un formulario, principalmente tenemos Template driven y Model Driven o formularios reactivos, en esta sección trabajaremos con formularios por template.

## Sección 17: Formularios Reactivos

¿Qué veremos en esta sección?
Este es un breve listado de los temas fundamentales:

- Formularios Reactivos
- Lazyload y tareas relacionadas
- Validaciones propias de Angular
- Arreglos y objetos anidados
- FormBuilder
- FormGroup
- FormArray

Esta sección continua en la siguiente con más temas relacionados a formularios reactivos, ya que como se podrán imaginar es bastante información que digerir, pero lo importante aquí es que comprendamos que Angular cuenta con varias maneras de manejar formularios.

Muchos me pregunta cuál aproximación prefiero, y son los formularios reactivos, porque siento que tengo mayor control y más fácilmente puedo manipular el formulario, pero los formularios por template sirven mucho cuando son tareas simples o rápidas. Aunque en esos casos, muchas veces prefiero no utilizar formularios por template y simplemente tomo el valor que necesito con referencias locales.