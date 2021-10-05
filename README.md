# :star2: CourseShare :books: 
![diseñofinal](https://github.com/DianaHuaripayta/LIM015-social-network/blob/dev-diana/src/images/imgReadme/CourseShare.png)

## Índice 

* [1. Definición del producto :pencil:](#1.-Definición-del-producto-:pencil:)
* [2. Historias de usuarios :woman: :man:](#2-Historias-de-usuarios-:woman:-:man:)
* [3. 3. Plan de acción :writing_hand:](#3.-Plan-de-acción-:writing_hand:)
* [4. Diseño :sparkles: ](#4-Diseño-:sparkles: )
* [5. Tecnologías empleadas :hammer:](#5.-Tecnologías-empleadas-:hammer:)
* [6. Checklist](#6-checklist)
* [7. Recursos](#7-recursos)


## 1. Definición del producto :pencil:

Si eres autodidacta y estás en constante aprendizaje **CourseShare** ¡te va a encantar! Esta red social esta dirigida para personas que buscan y comparten los mejores recursos didácticos para su formación académica y profesional.

CourseShare está desarrollada con HTML, CSS, Javascript y Firebase, en donde los usuarios registrados pueden visualizar los posts de otros miembros, incluida una sección sobre post destacados, además pueden realizar publicaciones, editarlos y eliminarlos y buscar algún miembro en específico. El usuario puede asignar a sus publicaciones el modo público o privado y dar like a sus publicaciones favoritas.


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



## 4. Diseño :sparkles: 

### Prototipo de baja fidelidad
![]()

### Testeos de usabilidad


### Prototipo final en figma

![]()

## 5. Tecnologías empleadas :hammer:

## 6. Checklist

## 7. Recursos

[_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)

[`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).

[Firebase](https://firebase.google.com/).

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)

* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)

* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)

* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)

* [Mobile First - ZURB](https://zurb.com/word/mobile-first)

* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)



README: 

  - Debe ser una SPA.
  - Debe ser _responsive_.
  - Deben haber recibido _code review_ de al menos una compañera de otro equipo.
  - Hicieron los _test_ unitarios
  - Testearon manualmente buscando errores e imperfecciones simples.
  - Hicieron _pruebas_ de usabilidad e incorporaron el _feedback_ de los
    usuarios como mejoras.
  - Desplegaron su aplicación y etiquetaron la versión (git tag).

### 5.4 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseña la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo.

### 5.5 Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Te
sugerimos seguir la técnica de _`mobile first`_ (más detalles sobre esta técnica
al final).

Para ayudar en el proceso de diseño, te proporcionamos un layout (diseño) de la vista mobile y desktop que puedes usar como referencia y cuyo contenido, colores y fuentes de texto, dejaremos a tu elección.

* Vista mobile

    ![mobile](https://user-images.githubusercontent.com/32286663/56174616-ec9f6100-5fb8-11e9-9edb-d5ef7c251d9c.png)

* Vista Desktop

    ![desktop](https://user-images.githubusercontent.com/32286663/56174626-fcb74080-5fb8-11e9-8854-26e8d9c4e25f.png)
    
### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - Al publicar, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.

### 5.7 Consideraciones técnicas Front-end

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con múltiples vistas. Para esto, tu aplicación debe ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación. Te recomendamos que uses
  [Firebase](https://firebase.google.com/) para eso también.

#### Pruebas unitarias (unit tests)

* Recuerda que no hay un _setup_ de **tests** definido, dependerá de
  la estructura de tu proyecto. Algo que no debes de olvidar es pensar en éstas
  pruebas, te pueden ayudar a definir la estructura y nomenclatura de tu lógica.

* Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
  _lines_, y _branches_.

### 5.8 Consideraciones técnicas UX

* Hacer al menos 2 entrevistas con usuarios.
* Hacer un prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de _testing de usabilidad_ con el producto en HTML.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Permite crear posts con imágenes.
* Permite buscar usuarios, agregar y eliminar "amigos".
* Permite definir la privacidad de los _posts_ (público o solamente para amigos).
* Permite ver su muro de cualquier usuario "no-amigo" (solamente los
  posts _públicos_).
* Permite comentar o responder una publicación.
* Permite editar perfil.

## Developers - Lima 015 :computer:
[Diana Huaripayta Gonzales](https://github.com/DianaHuaripayta)-
[yovana velasquez cruz](https://github.com/yovana888)-
[Margarita Zambrano](https://github.com/margaZM)

