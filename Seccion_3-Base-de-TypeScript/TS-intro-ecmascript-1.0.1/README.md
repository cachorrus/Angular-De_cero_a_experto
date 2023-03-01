# Proyecto para reforzar TypeScript - ECMAScript 20XX

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)

## Recursos TypeScript
* [Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## Bases de TypeScript

¿Qué veremos en esta sección?
Este es un breve listado de los temas fundamentales:

- Introducción a TypeScript
- Tipos básicos
- Objetos, arreglos e interfaces
- Funciones y sus argumentos
- Desestructuración de arreglos y objetos
- Importaciones y exportaciones
- Clases, constructores
- Tipos genéricos
- Decoradores
- Encadenamiento opcional

La idea de esta sección no es hacerlos expertos en TypeScript, pero sí irnos acostumbrando a la sintaxis y el tipado estricto de datos.
Después de la sección, podrán ver con otros ojos TypeScript y enfocarnos en todo lo que nos puede brindar, en lugar de las barreras que nos puede poner.