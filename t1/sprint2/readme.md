# ⏱️ Ejercicio 1: Contrarreloj

## Descripción
Este ejercicio consiste en crear un **temporizador simple** en el que el usuario puede introducir una cantidad de segundos, y al hacer clic en un botón, comienza la **cuenta regresiva**.  
Cuando el tiempo llega a cero, aparece el mensaje: **"¡Tiempo finalizado!"**.

---

## Archivos entregados
- `ejercicio1.html` → Contiene la estructura básica del temporizador.
- `ejercicio1.js` → Controla la lógica de la cuenta regresiva con `setInterval`.

---

## Instrucciones de uso
1. Abrir el archivo `ejercicio1.html` en el navegador.  
2. Escribir en el campo de texto el número de segundos a contar.  
3. Pulsar el botón **Iniciar**.  
4. El tiempo comenzará a descender hasta llegar a cero.  
5. Al finalizar se mostrará el mensaje: **¡Tiempo finalizado!**.

---

## Objetivos de aprendizaje
- Uso de **eventos** (`click`, `keydown`).  
- Manejo de **temporizadores** con `setInterval` y `clearInterval`.  
- **Manipulación del DOM** para mostrar el tiempo restante dinámicamente.  

---

## Demostración en GIF
Aquí se muestra el funcionamiento del ejercicio con un ejemplo de 5 segundos:  

![Demostración Ejercicio 1](ejercicio1.gif)



# 🧮 Ejercicio 2: Calculadora Básica

## Descripción
Este ejercicio consiste en crear una **calculadora básica** que permite realizar operaciones de:
- Suma
- Resta
- Multiplicación
- División  

El usuario introduce **dos números**, selecciona la operación y al hacer clic en **Calcular**, se muestra el resultado en pantalla.  

---

## Archivos entregados
- `ejercicio2.html` → Estructura de la calculadora.  
- `ejercicio2.js` → Lógica de operaciones y control de eventos.  

---

## Instrucciones de uso
1. Abrir el archivo `ejercicio2.html` en un navegador web.  
2. Introducir dos números en los campos correspondientes.  
3. Seleccionar la operación en el menú desplegable.  
4. Pulsar el botón **Calcular**.  
5. El resultado se mostrará en la página.  

---

## Objetivos de aprendizaje
- Manejo de **eventos** (`click`).  
- **Validación de entradas** de usuario (`isNaN`).  
- Uso de **operaciones matemáticas básicas** (+, -, *, /).  
- Manipulación del **DOM** para mostrar resultados dinámicamente.  

---

## Pruebas requeridas
El GIF de demostración debe mostrar los siguientes casos de prueba:  

1. Suma de **10 + 12** → resultado `22`.  
2. Resta de **10 - 12** → resultado `-2`.  
3. Multiplicación de **5 × 4** → resultado `20`.  
4. Multiplicación de **5 × 0** → resultado `0`.  
5. División de **5 ÷ 4** → resultado `1.25`.  
6. División de **5 ÷ 0** → resultado `"INDEFINIDO"`.  

---

## Demostración en GIF
Ejemplo de funcionamiento de la calculadora:  

![Demostración Ejercicio 2](ejercicio2.gif)
