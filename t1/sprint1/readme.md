# Ejercicio 1 - Cambio de Color con Botón

Este ejercicio consiste en crear una página web donde, al pulsar un botón, el color de fondo de la página cambie a un color aleatorio y se muestre su valor RGB en una cajita con gradiente.

---

## Pasos realizados

1. **HTML básico**
   - Creamos un botón con el texto "Cambiar color".
   - Añadimos un párrafo que mostrará los valores RGB.
   - Centramos el botón y el texto usando `flexbox`.

2. **Estilos CSS**
   - Estilizamos el botón con padding, color, borde redondeado y efecto hover.
   - La cajita de texto tiene un **gradiente** y se ajusta el color del texto automáticamente según la luminosidad del fondo para asegurar contraste.

3. **JavaScript**
   - Seleccionamos el botón y el párrafo desde el DOM.
   - Creamos una función que genera un color aleatorio usando `Math.random()` para obtener valores RGB.
   - Al hacer clic en el botón:
     - Cambia el fondo de la página al color generado.
     - Actualiza el párrafo con el valor RGB.
     - Aplica un gradiente al fondo del párrafo basado en el color generado.
     - Ajusta el color del texto según la luminosidad del color para mantener legibilidad.

---

## Resultado

![Demostración del Ejercicio 1](ej1/ejercicio1gif.gif)


---

### Archivos entregables
- `ejercicio1.html` → Página web principal.
- `ejercicio1.js` → Script que controla el cambio de color y la actualización del texto.
- `ejercicio1gif.gif` → GIF mostrando el funcionamiento.

# Ejercicio 2 - Calculadora de Área de un Rectángulo

Este ejercicio consiste en crear una página web donde, al introducir el ancho y el alto de un rectángulo y pulsar un botón, se calcule su área y se muestre el resultado en la página.

---

## Pasos realizados

1. **HTML básico**
   - Creamos dos campos de entrada (`input`) para ancho y alto.
   - Añadimos un botón con el texto "Calcular Área".
   - Añadimos un párrafo `<p>` donde se mostrará el resultado.
   - Todo el contenido está centrado vertical y horizontalmente usando `flexbox`.

2. **Estilos CSS**
   - Los inputs y el botón tienen padding, tamaño de fuente y bordes redondeados.
   - El botón tiene un efecto hover para mejorar la interacción.
   - El resultado se muestra con tamaño de fuente más grande y en negrita.

3. **JavaScript**
   - Se seleccionan los elementos del DOM: inputs, botón y párrafo de resultado.
   - Función `calcularArea`:
     - Convierte los valores de los inputs a números.
     - Valida que ambos sean números.
     - Calcula el área usando `ancho * alto`.
     - Muestra el resultado en el párrafo.
   - Evento `click` en el botón para ejecutar la función.

---

## Resultado

Al pulsar el botón, se calcula el área del rectángulo y se muestra en la página.  

![Demostración del Ejercicio 2](ej2/ejercicio2gif.gif)

---

### Archivos entregables
- `ejercicio2.html` → Página web principal.  
- `ejercicio2.js` → Script que calcula el área y actualiza el resultado.  
- `ejercicio2gif.gif` → GIF mostrando el funcionamiento del ejercicio.


# Ejercicio 3 - Listado Dinámico

Este ejercicio consiste en crear una página web donde el usuario puede añadir elementos a una lista de manera dinámica.  

---

## Pasos realizados

1. **HTML básico**
   - Creamos un campo de entrada (`input`) para escribir el nuevo elemento.
   - Añadimos un botón con el texto "Añadir a la lista".
   - Creamos una lista vacía `<ul>` donde se agregarán los elementos.
   - Todo el contenido está centrado vertical y horizontalmente usando `flexbox`.

2. **Estilos CSS**
   - Los inputs y el botón tienen padding, tamaño de fuente y bordes redondeados.
   - El botón tiene un efecto hover.
   - La lista y los elementos `<li>` tienen márgenes para mejorar la visualización.

3. **JavaScript**
   - Se seleccionan los elementos del DOM: input, botón y lista.
   - Función `añadirElemento`:
     - Obtiene el texto del input y elimina espacios en blanco.
     - Valida que el texto no esté vacío.
     - Crea un nuevo elemento `<li>` usando `document.createElement`.
     - Asigna el texto al `<li>` y lo añade a la lista con `appendChild`.
     - Limpia el input para el siguiente elemento.
   - Se añade un evento `click` al botón para ejecutar la función.
   - También se añadió la opción de pulsar `Enter` para añadir un elemento.

---

## Resultado

Al escribir un texto en el campo y pulsar el botón, el elemento se añade a la lista de manera dinámica.  

![Demostración del Ejercicio 3](ej3/ejercicio3gif.gif)

---

### Archivos entregables
- `ejercicio3.html` → Página web principal.  
- `ejercicio3.js` → Script que añade elementos a la lista.  
- `ejercicio3gif.gif` → GIF mostrando cómo se añaden 3 elementos a la lista.





