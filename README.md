# EIP-Angular: Actividad 2 - Lección 4 & 5

### ⚠️ Para esta actividad he clonado el codigo ya creado para la actividad 1 y he resuelto los ejercicios sobre este. Ademas he adaptado el codigo para que los cambios relizados se vean mas adecuados.


# Ejercicio 1: crear una directiva propia que modifique el color de fondo de un link y aumentar su tamaño de letra al hacer hover sobre el link.

**Respuesta:**
para crear una directiva propia usamos el comando: 

> ng generate directive 'directives/newDirective'

siendo 'directives' la carpeta donde se creara la directiva y 'newDirective' el nombre de la directiva a ser creada. Para este ejercicio creamos una directiva onHoverOverMenuLink:

> ng generate directive 'directives/onHoverOverLink'

Para resolver este ejercicio he creado dos directivas 😉
la primera sera para links normales como el que tenemos en la pagina de bienvenida: esta directiva aplicara unos estilos estandard sobre el link. Además cuando el ratón se mueva por encima del link los estilos cambiarán. Y cuando el ratón salga del link, este regresara a sus estilos predeterminados.

La segunda directiva funcionara de manera similar sobre los botones del menu de navegación pero sin hacer zoom en ellos.

para esto creamos las directiva:

## Primera directiva: onHoverOverLink
> ng generate directive 'directives/onHoverOverLink'

![Alt text](<Activity-Images/Captura de Pantalla 2023-07-22 a las 19.34.04.jpg>)

vemos que se ha creado:

![Alt text](<Activity-Images/Captura de Pantalla 2023-07-22 a las 19.34.25.jpg>)

ya que no haremos test en este caso, podemos borrar el fichero specs.ts pero esto es opcional 

y escribimos el siguiente codigo en on-hover-over-link-directive.ts:
![Alt text](<Activity-Images/Captura de Pantalla 2023-07-22 a las 20.28.27.jpg>)

finalmente añadimos la directiva al codigo html:

![Alt text](<Activity-Images/Screenshot 2023-07-25 at 12.46.13.png>)

### resultado:

![Alt text](<Activity-Images/Captura de Pantalla 2023-07-22 a las 20.31.33.jpg>)

![Alt text](<Activity-Images/Captura de Pantalla 2023-07-22 a las 20.31.42.jpg>)

## Segunda directiva: onHoverOverMenuLink

repetimos el proceso y añadimos el siguiente codigo:

![Alt text](<Activity-Images/Screenshot 2023-07-25 at 12.44.28.png>)

editamos el html:

![Alt text](<Activity-Images/Screenshot 2023-07-25 at 12.48.34.png>)

Vemos que ahora al mover el raton por encima de los botones del menu estos tienen un border de color azul.
![Alt text](<Activity-Images/Screenshot 2023-07-25 at 12.50.33.png>)

# Ejercicio 2, 3 y 4: 

## Para estos ejercicios he creado las siguientes directivas:

![Alt text](<Activity-Images/Screenshot 2023-07-25 at 12.54.00.png>)

me he ayudado con los componentes para crear variables estaticas y asi mantener la informacion de forma persistente, ya que al guardar la informacion en la propia directiva, esta se pierde al seleccionar un componente diferente.

He optado por guardar la formacion en variables estaticas de los componentes y asi poder acceder a la informacion desde diferentes puntos.

## -> ℹ️ para el ejercicio 3 he usado el formulario de contacto y para el ejercicio 4 he creado un nuevo formulario de inicio de sesión.

### ContactComponent:

![Alt text](<Activity-Images/Screenshot 2023-07-25 at 12.59.13.png>)

### LoginComponent: 

![Alt text](<Activity-Images/Screenshot 2023-07-25 at 12.59.36.png>)


## las directivas de "get-input" se encargan de guardar la información en los componentes:

### para el formulario de contacto:
![Alt text](<Activity-Images/Screenshot 2023-07-25 at 13.01.39.png>)

### para el formulario de login
![Alt text](<Activity-Images/Screenshot 2023-07-25 at 13.01.48.png>)


## estas directivas son aplicadas en el html en los campos de input

### para el formulario de contacto:
![Alt text](<Activity-Images/Screenshot 2023-07-25 at 15.54.18.png>)

### para el formulario de login
![Alt text](<Activity-Images/Screenshot 2023-07-25 at 15.54.33.png>)


## las directivas de los botones se encargan de realizar una evaluacion y cambiar el color de los bordes de los inputs


![Alt text](<Activity-Images/Screenshot 2023-07-25 at 13.05.15.png>)

## En especial el botón de login realiza una evaluación mejorada usando expresiones regulares:
![Alt text](<Activity-Images/Screenshot 2023-07-25 at 13.05.27.png>)

## finalmente vemos los resultados.

# Contacto
en el formulario de contacto los inputs empiezan con un border normal. Una vez el usuario empieza a escribir ya sea en el campo para escribir el email o para escribir el mensaje, lo que sea que el usuario escriba se vera reflejado debajo del boton de enviar. El borde de los campos de texto se mantendran neutral mientras contengan texto. Si el usuario borra el contenido de alguno de los inputs su borde se pondra de color rojo. 

![Alt text](<Activity-Images/Screenshot 2023-07-25 at 16.04.52.png>)
![Alt text](<Activity-Images/Screenshot 2023-07-25 at 16.05.03.png>)

El boton de enviar evalua si los campos de texto tienen contenido o no, cambiando sus bordes segun el caso. Rojo si estan vacios y verde si tienen texto

![Alt text](<Activity-Images/Screenshot 2023-07-25 at 16.05.20.png>)

# Login
El comportamiento es muy similar al formulario de contacto, solo que en este caso, el texto no se imprime automaticamente en pantalla. Primero el usuario debe introducir un email y una contraseña, ambos validos. Al hacer esto y dar click al boton, el boton realizara la evaluacion. Si todo esta bien, el texto se mostrara en pantalla, de lo contrario, un texto de error aparecerá:

![Alt text](<Activity-Images/Screenshot 2023-07-25 at 16.14.48.png>)
![Alt text](<Activity-Images/Screenshot 2023-07-25 at 16.15.23.png>)
![Alt text](<Activity-Images/Screenshot 2023-07-25 at 16.15.31.png>)

## Directivas de Reset
las directivas de reset ponen los formularios en su forma original cuando se cambia de pagina. Esto lo hice porque al cambiar de pagina, los colores de los bordes no se actualizaban automaticamente. De esta manera se resetea la informacion al dar click en los botones de navegacion.

![Alt text](<Activity-Images/Screenshot 2023-07-25 at 16.21.29.png>)
![Alt text](<Activity-Images/Screenshot 2023-07-25 at 16.21.36.png>)
![Alt text](<Activity-Images/Screenshot 2023-07-25 at 16.21.51 1.png>)
