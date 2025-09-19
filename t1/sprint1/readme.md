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

![Demostración del Ejercicio 1](ejercicio1gif.gif)


---

### Archivos entregables
- `ejercicio1.html` → Página web principal.
- `ejercicio1.js` → Script que controla el cambio de color y la actualización del texto.
- `ejercicio1gif.gif` → GIF mostrando el funcionamiento.



