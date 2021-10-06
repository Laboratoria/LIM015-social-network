# :star2: CourseShare :books: 
![diseñofinal](https://github.com/margaZM/LIM015-social-network/blob/main/src/images/imgReadme/CourseShare.png?raw=true)

## 1. Definición del producto :pencil:

Si eres autodidacta y estás en constante aprendizaje **CourseShare** ¡te va a encantar! Esta red social esta dirigida para personas que buscan y comparten los mejores recursos didácticos para su formación académica y profesional.

CourseShare está desarrollada con HTML, CSS, Javascript y Firebase, en donde los usuarios registrados pueden visualizar los posts de otros miembros, incluida una sección sobre post destacados, además pueden realizar publicaciones, editarlos y eliminarlos y buscar algún miembro en específico. El usuario puede asignar a sus publicaciones el modo público o privado y dar like a sus publicaciones favoritas.

Te envitamos a registrarte y probar la funcionalidad de courseShare a traves este [link](https://margazm.github.io/LIM015-social-network/src/).


## 2. Historias de usuarios :woman: :man:

| Historias de usuario | Criterios minimos de aceptación | Definición de terminado |
| -- | -- | -- |
|**Historia 1:** *Yo como usuario nuevo quiero registrarme en la red social:* con mi correo electrónico o con Google para posteriormente iniciar sesión. | Notificar al usuario mediante alertas en caso de cometer un error al registrarse, fallas de internet, correo registrado y/o registro exitoso y almacenar los datos en firestore. | Cuando el usuario logre crear su cuenta con éxito la información queda almacenada en firebase y se le envia un alerta de información. |
|**Historia 2:** *Yo como usuario registrado quiero ingresar a la red social:* mediante mi correo electrónico o google para loguearme de una manera fácil y/o recuperar contraseña en caso de olvido. |Validar las credenciales ingresadas por el usuario para el inico de sesión, en caso de olvido permitir recuperar la contraseña y redireccionar al usuario al timeline en caso de inicio de sesión exitoso. | El usuario logra cambiar la contraseña en caso de olvido y puede redireccionar correctamente a la vistas de timeline. |
|**Historia 3:** *Yo como usuario  registrado quiero ver las publicaciones de todos los usarios de la red social:* para conocer e informarme sobre los nuevas recomendaciones, opiniones, etc de los demás.|Visualizar las publicaciones públicas desde las más recientes hasta las más antiguas, incluyendo una sección para post destacados. | El usuario logra visualizar las publicaciones en orden ascendente y los post mas populares y no puede visualizar las publicaciones marcadas como privadas. |
|**Historia 4:** *Yo como usuario  registrado quiero editar mis publicaciones:* para guardar la nueva información y visualizar mis cambios.|Mostrar un boton para editar cada post elaborado por el usuario y enviar esa publicacion al timeline. | El usuario solo puede editar sus publicaciones, logra guardar los cambios realizados y visualizarlos en el timeline. |
|**Historia 5:** *Yo como usuario registrado quiero eliminar mis publicaciones:* para quitarlas del muro previa notificación de eliminación.  | Mostrar un boton para eliminar cada post elaborado por el usuario y removerlo del firestore y del timelime. | El usuario solo puede eliminar sus publicaciones, con una confirmación previa y estas ya no se refejan en el timelime. |
|**Historia 6:** *Yo como usuario registrado quiero cerrar sesión:* para asegurarme que nadie más pueda manipular mi cuenta sin autorización.|Mostrar un botón para cerrar sesión de la cuenta. |El usuario logra salir de su cuenta exitosamente y es redirigido a la págia de inicio. |
|**Historia 7:** *Yo como usuario quiero visualizar el perfil de otros usuarios:* para conocer sobre sus intereses y datos personales.|Al pulsar en el nombre de otros usuarios se logra visualizar su información y sus publicaciones públicas realizadas. |El usuario puede visitar el perfil de otros usuarios sin editar ningun contenido de los mismos. |
|**Historia 8:** *Yo como usuario registrado quiero darle me encanta a las publicaciones:* para indicar si me gusta el curso recomendado en dicha publicación.| Mostrar y restar un like de acuerdo a la interaccion de un usuario. | El usuario pulsa en el icono de like y aparece un corazon relleno en rojo y este se sigue sumando por cada reaccion de otros usuarios, al dar dislike se debe restar la cantidad y el corazon queda vacio.|
|**Historia 9:** *Yo como usuario registrado quiero un buscador:* para ubicar de forma fácil nombre de usuarios.| Crear un input de búsqueda para buscar un usuario específico para visitar su perfil. | El usuario podrá realizar búsquedas de otros usuarios por su nombre y al encontrarlos visitar su perfil.|
|**Historia 10:** *Yo como usuario registrado quiero agrupar mis publicaciones:* para visualizar diferentes categorías de cursos.| Crear etiquetas para que el usuario pueda seleccionar la categoría a la que pertenece el curso en donde se almacenanarán exclusivamente ese tipo de cursos. | El usuario realiza un post y escoge una categoría especifica a la que pertenece, cada post se agrupa por el usuario de de acuerdo a la categoría escogida.|
|**Historia 11:** *Yo como usuario registrado quiero comentar publicaciones:* para poder compartir mi opinión a otros usuarios.| Mostrar un boton para comentar un post particular y visualizarlo en tiempo real. | El usuario puede comentarpor el usuario de  otras publicaciones y es visualizado satisfactoriamente en la publicación original.|


## 3. Plan de acción :writing_hand:

El plan de acción lo manejamos desde la plataforma Trello, en donde desarrollamos todas las historias de usuario y las actividades necesarias para definirla como terminado, en este [link](https://trello.com/b/OPVJITMA/red-social) se puede ver a detalle la ejecución del mismo.

De igual forma manejamos la plataforma de Github projects para la asignación de milestones por cada sprint y la asignación de issues a cada miembro del equipo.

## 4. Diseño :sparkles:

En el primer sprint desarrolamos el prototipo de baja fidelidad que a continuación se puede visualizar y realizamos una encuesta para obtener las sugerencias de los usuarios, en cuanto a estructura, paleta de colores y nombre de la red social. Obtuvimos que al 33.3% les gustó el nombre de courseShare seguido de courses Network con 27.8%. El logo finalizado que usamos en el diseño fue escogido por el 39% de los encuestados y la estructura fue aprobada por más del 50%. Dicha encuesta se puede visualizar en el siguiente [link](https://docs.google.com/forms/d/1Qs-LX0jMYQQH0qi4hPuqTBe0Gsx4ceJlo8rRuu0p6Hc/edit?userstoinvite=angelicadiana2002@gmail.com&ts=6128fbf2)

### Prototipo de baja fidelidad
Login de baja fidelidad
![login](https://github.com/margaZM/LIM015-social-network/blob/dev/src/images/imgReadme/Group%2038.png?raw=true)

Timeline
![Timeline](hhttps://github.com/margaZM/LIM015-social-network/blob/dev/src/images/imgReadme/Group%2040.png?raw=true)

Profile
![Profile](https://github.com/margaZM/LIM015-social-network/blob/dev/src/images/imgReadme/Group%2040.png?raw=true)

En el siguiente sprint desarrolamos el prototipo de alta fidelidad en figma, el cual presentamos a continuación, en donde consideramos las sugerencias de los usuarios y realizamos algunos cambios en la estructura y diseño.

### Prototipo final en figma
Login
![login](https://raw.githubusercontent.com/margaZM/LIM015-social-network/dev-diana/src/images/imgReadme/login.png)

Timeline
![Timeline](https://raw.githubusercontent.com/margaZM/LIM015-social-network/dev-diana/src/images/imgReadme/timeline.png)

Profile
![Profile](https://raw.githubusercontent.com/margaZM/LIM015-social-network/dev-diana/src/images/imgReadme/profil.png)

![Profile](https://raw.githubusercontent.com/margaZM/LIM015-social-network/dev-diana/src/images/imgReadme/profile.png)

CourseShare tiene un diseño responsive por lo tanto permite que pueda ser visualizado en diferentes dispositivos:
Login
![login](https://github.com/margaZM/LIM015-social-network/blob/dev/src/images/imgReadme/responsive3.png?raw=true)

Timeline
![Timeline](https://github.com/margaZM/LIM015-social-network/blob/dev/src/images/imgReadme/responsive.png?raw=true)

Timeline
![Timeline](https://github.com/margaZM/LIM015-social-network/blob/dev/src/images/imgReadme/responsive2.png?raw=true)

## 5. Tecnologías empleadas :hammer:
<img src="https://github.com/margaZM/LIM015-social-network/blob/dev/src/images/imgReadme/html.png?raw=true" width="40"  height="40" style="margin-right:20px"/><img src="https://github.com/margaZM/LIM015-social-network/blob/dev/src/images/imgReadme/css.png?raw=true" width="40"  height="40" style="margin-right:20px"/><img src="https://github.com/margaZM/LIM015-social-network/blob/dev/src/images/imgReadme/js.png?raw=true" width="40"  height="40" style="margin-right:20px"/><img src="https://raw.githubusercontent.com/margaZM/LIM015-social-network/b6d6ba58f620aa283769447e05d51041477f9ced/src/images/imgReadme/firebase.svg" width="40"  height="40" style="margin-right:20px"/><img src="https://github.com/margaZM/LIM015-social-network/blob/dev/src/images/imgReadme/eslint.png?raw=true" width="40"  height="40" style="margin-right:20px"/><img src="https://github.com/margaZM/LIM015-social-network/blob/dev/src/images/imgReadme/jest.png?raw=true" width="40"  height="40" />


## 6. Checklist
* [x] Usa VanillaJS.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y lines y branches.
* [x] Incluye un _plan de acción_ de tus objetivos de aprendizaje prioritizado en `README.md` (o otro archivo).
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario (prototipo de alta fidelidad) en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de usabilidad en el `README.md`.
* [x] Es una SPA.
* [x] Creación de cuenta de acceso y autenticación con cuenta de correo y contraseña, y también con una cuenta de Google.
* [x] Solamente se permite el acceso a usuarios con cuentas válidas.
* [x] Si hay errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos.
* [x] Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* [x] Poder publicar un post, editar y eliminar un post específico
* [x] No pueden haber usuarios repetidos.
* [x] UI: Es _responsive_.
* [x] Poder dar y quitar _like_ a una publicación. Máximo uno por usuario. Llevando un conteo de los likes.
* [x] Permite crear posts con imágenes.
* [x] Permite buscar usuarios.
* [x] Permite definir la privacidad de los _posts_ (público o solamente para amigos).
* [x] Permite comentar o responder una publicación.
* [x] Permite editar perfil.

## 7. Recursos

* [Mobile first](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)

* [Window.history](https://developer.mozilla.org/es/docs/Web/API/Window/history).

* [Firebase](https://firebase.google.com/).

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)

* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)

* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)

* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)

* [Mobile First - ZURB](https://zurb.com/word/mobile-first)

* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)


## Developers - Lima 015 :computer:
:woman_technologist: [Diana Huaripayta Gonzales](https://github.com/DianaHuaripayta) 

:woman_technologist: [yovana velasquez cruz](https://github.com/yovana888) 

:woman_technologist: [Margarita Zambrano](https://github.com/margaZM)

