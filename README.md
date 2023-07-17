# EIP-Angular: Actividad Lección 3 

**1. Indique la secuencia de comandos que utilizaría para instalar framework Angular con la última version.**
**2. Indique los pasos para instalar framework Angular, con versión 11**

**Respuesta:**

1. Despues de haber instalado el Node Package Manager o npm se usa el siguiente comando para instalar la version mas reciente de Angular:

> npm install @angular/cli@latest

2. Para instalar la version 11 de angular se usaria el siguiente comando:

> npm install @angular/cli@11

Si se desea instalar alguna version de forma global en el ordenador de usaria -g despues de install. Ejemplo:

> npm install -g @angular/cli@11

De lo contrario la instalacion es local en la carpeta actual.

***

**Actividad:**
**Realice una instalación del framework Angular en su última versión estable. Para ello documente cada paso, indicando la secuencia de comandos utilizados y evidencias con imágenes y mostrando las versiones de node, angular.**




***
**Instalacion:**

Primero navegamos a la carpeta donde crearemos el proyecto:

![Alt text](<Activity-Images/Screenshot 2023-07-17 at 08.52.17.png>)

Instalamos la version mas reciente y estable de angular. Según la website de Angular es la version 16:

> npm install @angular/cli@16

![Alt text](<Activity-Images/Screenshot 2023-07-17 at 08.53.16.png>)

con 'ng v' podemos comprobar la version de angular:
> ng v

![Alt text](<Activity-Images/Screenshot 2023-07-17 at 08.54.42.png>)

ahora creamos un nuevo proyecto:

> ng new Actividad-Leccion-3
 
![Alt text](<Activity-Images/Screenshot 2023-07-17 at 08.57.50.png>)

una vez creado el proyecto navegamos a la carpeta nueva que ha sido creada:

![Alt text](<Activity-Images/Screenshot 2023-07-17 at 08.58.15.png>)

si abrimos esta carpeta en nuestro editor de codigo preferido (en mi caso Visual Studio Code) podemos ver que todos los archivos han sido creados como era de esperarse:

![Alt text](<Activity-Images/Screenshot 2023-07-17 at 09.03.15.png>)


***

**Actividad:**

**Una vez instalado, debe crear al menos tres componentes. La finalidad de los
componentes creados será:**

1. Encabezado de página web.
2. Footer de página web.
3. Formulario de página web.
4. Currículum del alumno.





***
**Instalacion de componentes:**

Para instalar o generar componentes usamos ng generate component o su version abreviada ng g c "componente" (antes del componente podemos poder la carpeta: "carpeta/componente")

en este caso creamos los componentes solicitados:

> ng g c components/Header

> ng g c components/Footer

> ng g c pages/formular

> ng g c pages/curriculum

vemos que se han creado los componentes dentro de las carpetas designadas 

![Alt text](<Activity-Images/Screenshot 2023-07-17 at 09.30.17.png>)

![Alt text](<Activity-Images/Screenshot 2023-07-17 at 09.31.15.png>)


He borrado los archivos .spec.ts Dado a que no vamos a necesitar estos archivos 
