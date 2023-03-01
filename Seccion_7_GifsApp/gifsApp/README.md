# GifsApp

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

## Agregar archivos de environments Angular 15
- [configuring-application-environments](https://angular.io/guide/build#configuring-application-environments)

Crear los archivos en el directorio src/environments/

```
|-- environment.ts
|-- environment.development.ts
```
Agregar las variables de entorno en los archivos

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `production` | `boolean` | **Required**. true para el ambiente de produccion |
| `api_key` | `string` | **Required**. GIPHY API Key. |

## Tools 

- [Bootstrap](https://getbootstrap.com/): Build fast, responsive sites with Bootstrap 
- [Giphy](https://developers.giphy.com/): GIPHY SDK and API’s help you integrate the world's largest GIF and video library, customize a suite of powerful features, and boost engagement with just a few lines of code.
- [Quicktype](https://quicktype.io/): Convert JSON into gorgeous, typesafe code in any language.
- [animate.css](https://animate.style/): Animate.css is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints.

## GifsApp - Aplicación para buscar imágenes

¿Qué veremos en esta sección?
La sección contendrá nuestra primera aplicación real de Angular, este es un breve listado de los temas fundamentales:

- Modularización de la aplicación
- Estructura de la aplicación de media a gran escapa
- Componentes
- ViewChild
- Servicios
- Historial de búsquedas
- Uso de Api Keys
- LocalStorage
- Peticiones HTTP
- Animaciones mediante css
