# EIP-Angular: Actividad 2 - Lección 4 & 5

### ⚠️ Para esta actividad he clonado el codigo ya creado para la actividad 1 y he resuelto los ejercicios sobre este. 


### Ejercicio 1: crear una directiva propia que modifique el color de fondo de un link y aumentar su tamaño de letra al hacer hover sobre el link.

**Respuesta:**
para crear una directiva propia usamos el comando: 

> ng generate directive 'directives/newDirective'

siendo 'directives' la carpeta donde se creara la directiva y 'newDirective' el nombre de la directiva a ser creada. Para este ejercicio creamos una directiva onHoverOverMenuLink:

> ng generate directive 'directives/onHoverOverLink'

Para resolver este ejercicio he creado dos directivas 😉
la primera sera para links normales como el que tenemos en la pagina de bienvenida. La directiva aplicara unos estilos estandard sobre el link. Además cuando el ratón se mueva por encima del link los estilos cambiarán. Y cuando el ratón salga del link, este regresara a sus estilos predeterminados.

para esto creamos la directiva:

> ng generate directive 'directives/onHoverOverLink'

![Alt text](<Activity-Images/Captura de Pantalla 2023-07-22 a las 19.34.04.jpg>)

vemos que se ha creado:

![Alt text](<Activity-Images/Captura de Pantalla 2023-07-22 a las 19.34.25.jpg>)

ya que no haremos test en este caso, podemos borrar el fichero specs.ts pero esto es opcional 

y escribimos el siguiente codigo en on-hover-over-link-directive.ts:
![Alt text](<Activity-Images/Captura de Pantalla 2023-07-22 a las 20.28.27.jpg>)



### resultado:

![Alt text](<Activity-Images/Captura de Pantalla 2023-07-22 a las 20.31.33.jpg>)

![Alt text](<Activity-Images/Captura de Pantalla 2023-07-22 a las 20.31.42.jpg>)

