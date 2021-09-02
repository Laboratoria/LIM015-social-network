# SOCIAL NETWORK

## INDICE

* [1. Preámbulo](#la-ruta)
* [2. Challege](#challenge)
* [3. Resumen del proyecto](#resumen-del-proyecto)
* [4. Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [5. Especificaciones](#especificaciones)
* [6. Otras Especificaciones](#otras-especificaciones)
* [7. Imagenes](#imagenes-del-proyecto)
* [8. Links relacionados](#links-relacionados)
* [9. Autores](#autores)
******
## La Ruta

Sabemos que la pandemia ha dejado estragos en todos y nos ha privado de una de las cosas que mas nos gusta hacer que es viajar, y que mejor que una red social para compartir experiencias ¿no? es aquí donde nace LA RUTA, para volvernos a conectar con nuestros paisajes compartiendo las mejores experiencias con otros usuarios y la clave es el ahorro.

### Challenge

Este challenge es proporcionado por el equipo de [Laboratoria](https://github.com/Laboratoria/LIM015-social-network), el cual consiste en realizar una red social básica implementando SPA, router, firebase y sus servicios con vanilla js.

### Resumen del proyecto

Pensando en el usuario y la situación actual que nos acontece, traemos una propuesta acerca de lo que nos hemos privado por muchos meses durante la pandemia, que es viajar, tenemos en cuenta que la economía esta desgastada también y mucha gente que no viajaba lo empezará a realizar cuando las cosas se regulen, es por eso que esta red social es para los amantes de los viajes y tienen la oportunidad de compartir sus experiencias, gastos de viajes, mejores hoteles a un precio accesible para aquellas personas que viajan por primera vez o quieren escaparse de la ciudad sin tener que invertir tanto. Confiamos en que esta red sea amigable, sencilla pero muy útil para que el usuario (Viajero empedernido o no jaja) pueda encontrar una variedad de recomendaciones y opte por la que mejor le parezca.

### Objetivos de aprendizaje

__UX:__

[x] Diseñar la aplicación pensando y entendiendo al usuario.  
[x] Crear prototipos para obtener feedback e iterar.  
[x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).  
[X] Planear y ejecutar tests de usabilidad.  

__HTML:__  

[X] Uso de HTML semántico.  

__CSS:__

[X] Uso de selectores de CSS.  
[X] Modelo de caja (box model): borde, margen, padding.  
[X] Construir tu aplicación respetando el diseño realizado (maquetación).  
[X] Uso de flexbox en CSS.  
[ ] Uso de CSS Grid Layout  

__DOM - WEB API:__  

[x] Uso de selectores del DOM.  
[x] Manejo de eventos del DOM (listeners, propagación, delegación)  
[x] Manipulación dinámica del DOM (appendChild |createElement | createTextNode| innerHTML | textContent | etc.).  
[x] Ruteado (History API, evento hashchange, window.location)  
[x] History API  
[x] Localstorage  

__JAVASCRIPT:__  

[x] Uso de condicionales (if-else | switch | operador ternario).  
[x] Uso de funciones (parámetros | argumentos | valor de retorno).  
[x] Manipular arrays (filter | map | sort | reduce).  
[x] Manipular objects (key | value).  
[x] Uso de ES Modules (import | export).  
[x] Diferenciar entre expression y statements.  
[x] Diferenciar entre tipos de datos atómicos y estructurados (datos primitivos y no primitivos).  
[x] Variables (declaración, asignación, ámbito)  
[x] Uso de bucles/ciclos (while, for, for..of)  
[x] Funciones (params, args, return)  
[x] Uso de Callbacks  
[x] Consumo de Promesas  

__TESTING:__  

[x] Testeo unitario.  
[ ] Testeo asíncrono. 
[x] Uso de librerias de Mock.  
ESTRUCTURA DEL CODIGO, GUIA DE ESTILO
[x] Organizar y dividir el código en módulos (Modularización).  
[x] Uso de identificadores descriptivos (Nomenclatura | Semántica).  
[x] Uso de mocks y espías.  
[x] Módulos de ECMAScript (ES Modules)  
[x] Uso de identificadores descriptivos (Nomenclatura y Semántica)  
[x] Uso de linter (ESLINT).
GIT / GITHUB  
[x] Instalación y configuración  
[x]Uso de comandos de git (add | commit | pull | status | push).  
[x] Manejo de repositorios de GitHub (clone | fork | gh-pages | code review)  
[x] Colaboración en Github (branches | pull requests | |tags)/(branch, checkout, fetch, merge, reset, rebase, tag)  
[ ] Creación de cuenta y repos, configuración de llaves SSH  
[x] Organización en Github (projects | issues | labels | milestones)

__FIREBASE:__

[x] Firestore  
[x] Firebase Auth  
[] Firebase security rules  
[] Observables  

### Especificaciones

![Historia de usuario 1](https://github.com/noelishernandezdg/LIM015-social-network/blob/main/src/images/HUpagina1.png)

![Historia de usuario 2](https://github.com/noelishernandezdg/LIM015-social-network/blob/main/src/images/HUpagina2.png)

__*TOPIC:*__

 Turismo

__*OBJETIVOS PRINCIPALES:*__  

- Permitir a cualquier usuario crear una cuenta de acceso y loguearse con ella; crear, editar, borrar y "likear" publicacciones.
- Permitir al usuario loguearse con su cuenta de google
- Permitir compartir publicaciones con la comunidad de viajeros
- Permitir al usuario editar, eliminar sus posts
- Poder darle 1 solo like por usuario a cada publicación

__*Quiénes son los principales usuarios de producto:*__

Todas las personas que les interesa viajar o compartir sus experiencias

__*Qué problema resuelve el producto / para qué le servirá a estos usuarios:*__

Luego de la pandemia, muchas personas desearan salir de sus hogares a un viaje ya sea express o de larga estadia, sin embargo muchas personas no conocen los destinos turisticos que tiene su país y con esta red pueden descubrir a través de otros viajeros propuestas económicas, divertidas y completas
### Otras especificaciones

Este proyecto esta realizado desde el frontend con vanilla js y con ayuda de firebase poemos tener un backend amigable y en tiempo real


__*PROTOTIPO DEN FIGMA:*__  

Inicio del proyecto: 27/07/2021  

![la Ruta Prototipo En Desktop](https://github.com/noelishernandezdg/LIM015-social-network/blob/main/src/images/laRutaPrototipoEnDesktop.png)

![la Ruta Prototipo En Movil](https://github.com/noelishernandezdg/LIM015-social-network/blob/main/src/images/laRutaPrototipoEnMovil.png)

* __*PRODUCTO FINAL:*__

Fin del proyecto: 31/07/2021  

![Home](https://github.com/noelishernandezdg/LIM015-social-network/blob/main/src/images/desktopFinal.png)

![Tablet](https://github.com/noelishernandezdg/LIM015-social-network/blob/main/src/images/tabletFinal.png)

![inicia ConGoogle](https://github.com/noelishernandezdg/LIM015-social-network/blob/main/src/images/iniciaConGoogle.png)

![registrase](https://github.com/noelishernandezdg/LIM015-social-network/blob/main/src/images/registrase.png)

![inciarSesion](https://github.com/noelishernandezdg/LIM015-social-network/blob/main/src/images/inciarSesion.png)

![timeLine](https://github.com/noelishernandezdg/LIM015-social-network/blob/main/src/images/timeLine.png)

[project](https://github.com/Andu15/LIM015-social-network/tree/Development)

### Links relacionados

Estos son acuerdos, herramientas y archivos que usamos durate el proceso del proyecto para organizarnos y hacer un trabajo eficiente y colaborativo.

* [Acuerdos](https://docs.google.com/document/d/1tyio69y0ikjXWUJK1B1CMIEPRa5Brl1MORAMv8gnI30/edit#heading=h.ng30guuqqp2v)
* [Notas grupales](https://keep.google.com/u/0/#home)
* [Trello](https://trello.com/b/EmvhIVIQ/social-network)
* [github projects](https://github.com/Andu15/LIM015-social-network/projects/1)
* [Figma](https://www.figma.com/file/nU22NqrX9DSgnL9jVprAdc/RED-SOCIAL?node-id=0%3A1)

### Autores

**_Trabajo colaborativo:_**

_Este proyecto fue hecho posible gracias a:_
* **Noelis Hernández** - [noelishernandezdg](https://github.com/noelishernandezdg)
* **Emily Fernandez** - [Emily3000](https://github.com/Emily3000)
* **Andrea Blanco** - [Andu15](https://github.com/Andu15)