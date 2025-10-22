# 🧮 Ejercicio 1 - Análisis y Transformación Avanzada de Datos

Este ejercicio consiste en trabajar con un conjunto de estudiantes representados como objetos dentro de un array, aplicando distintas funciones de análisis, filtrado y transformación de datos.

---

## 📂 Estructura
- `ejercicio1.html` → Contiene la interfaz con botones para ejecutar cada parte.
- `ejercicio1.js` → Contiene las funciones y los datos de los estudiantes.

---

## 🧩 Funcionalidades
A continuación se muestran dos gifs en los que se incluyen todos las pruebas a realizar para el ejercicio.

### 1️⃣ Estudiantes Destacados por Asignatura
Muestra los **3 estudiantes con mejores notas** en una asignatura dada.

### 2️⃣ Asignatura con Menor Rendimiento
Calcula la **asignatura con el promedio más bajo** entre todos los estudiantes.

### 3️⃣ Mejora de Notas para Estudiantes con Beca
Aumenta todas las notas de los estudiantes con beca en un **10% (máximo 10).**

### 4️⃣ Filtrado por Ciudad y Asignatura
Filtra los estudiantes de una ciudad y los ordena **descendentemente** por la nota en una asignatura.

![Demostración Prueba](ejercicio1/ej1gifs/gifs1-4.gif)

### 5️⃣ Estudiantes Sin Beca por Ciudad
Devuelve la **cantidad de estudiantes sin beca** en una ciudad.

### 6️⃣ Promedio de Edad de Estudiantes con Beca
Calcula el **promedio de edad** de los estudiantes que tienen beca.

### 7️⃣ Mejores Estudiantes en Total
Muestra los **2 estudiantes con mejor promedio general** entre todas las asignaturas.

### 8️⃣ Estudiantes con Todas las Materias Aprobadas
Devuelve un array con los **nombres de los estudiantes que aprobaron todas las materias** (nota ≥ 5).

![Demostración Prueba](ejercicio1/ej1gifs/gifs5-8.gif)

--------------------------------------------------------------------------------------------

# 📌 Ejercicio 2 – PokeAPI
**Sprint 3 – Entorno Cliente (2º DAW)**

Este ejercicio utiliza JavaScript y la API pública **PokeAPI** para obtener y mostrar información sobre Pokémon de forma dinámica y visual.

## ✅ 1. Funcionalidades implementadas + gifs correspondientes

### 🔹 1. Buscar Pokémon
- Introducir el nombre de un Pokémon (Pikachu y Charizard).
- Muestra:
  - Nombre e ID
  - Tipo elemental
  - Imagen oficial
- Incluye manejo de errores si el Pokémon no existe o si el input está vacío.

![Demostración Prueba](ejercicio2/ej2gifs/gif1.gif)

### 🔹 2. Pokémon falso
- Comprobar si el Pokémon existe al introducir un nombre erróneo (fakepokemon).
- Se muestra:
  - Alerta de Pokémon no encontrado.
- Todo el contenido aparece centrado y bien estructurado.

![Demostración Prueba](ejercicio2/ej2gifs/gif2.gif)

### 🔹 3. Comparar Pokémon
- Introducir dos Pokémon y comparar sus estadísticas base.
- Se muestra:
  - Imagen de ambos Pokémon (a los lados de la tabla)
  - Tabla comparativa de estadísticas
  - Suma total de stats
  - Ganador o “Empate”
- Todo el contenido aparece centrado y bien estructurado.

![Demostración Prueba](ejercicio2/ej2gifs/gif3.gif)

### 🔹 3. Cadena Evolutiva + Habilidades
- Introducir un Pokémon y mostrar **toda su cadena evolutiva**.
- Cada evolución incluye:
  - Imagen oficial
  - Nombre
  - Habilidades
- Las evoluciones se muestran **en horizontal** (no en columna).
- Si el Pokémon no tiene evoluciones, se muestra un mensaje informativo.

![Demostración Prueba](ejercicio2/ej2gifs/gif4.gif)

-----------------------------------------------------------------------------------------------------

# 📌 Ejercicio 3 – Guild Members Management
**Sprint 3 – Entorno Cliente (2º DAW)**

Este ejercicio utiliza JavaScript, PHP y MySQL para implementar un **CRUD completo** (Create, Read, Update, Delete) de miembros de una guild, utilizando un modal para añadir y editar miembros, y mostrando los datos en una tabla dinámica. Cabe mencionar que se ha tenido que ejecutar mediante el uso de Apache y MySQL desde XAMPP para poder crear la base de datos y almacenar los datos.
Estos han quedado reflejados en los gifs.

---

## ✅ 1. Funcionalidades implementadas + gifs correspondientes

### 🔹 1. Visualización de miembros
- Al abrir la página, se cargan todos los miembros desde la base de datos (`guild_db`) usando `getMembers.php`.
- Se muestra:
  - User ID
  - Username
  - Level
  - Item Level
  - Character Role
  - Guild Role
  - Botones de Editar y Eliminar

![Demostración Prueba](ejercicio3/ej3gifs/capturaimagen.png)

---

### 🔹 2. Añadir nuevo miembro
- Hacer clic en **Add New Member** abre un modal con el formulario.
- Campos obligatorios:
  - user_id, username, level, ilvl, character_role, guild_role
  - main_archetype, secondary_archetype, email, notify_email
- Validaciones:
  - user_id único
  - Email válido
- Al guardar, se añade el miembro en la tabla y en la base de datos mediante `addMember.php`.

![Demostración Prueba](ejercicio3/ej3gifs/gif1.gif)

---

### 🔹 3. Validaciones de formulario
- Probar con campos vacíos o email inválido muestra mensaje de error.
- Probar con un user_id ya existente impide la duplicación y muestra mensaje de error.

![Demostración Prueba](ejercicio3/ej3gifs/gif3.gif)

---

### 🔹 4. Editar miembro
- Hacer clic en **Edit** en un miembro abre el modal con los datos precargados.
- Se pueden modificar:
  - level, ilvl, character_role, guild_role, main/secondary archetype, email, notify_email
- Al guardar, se actualizan los datos en la tabla y en la base de datos mediante `updateMembers.php`.

![Demostración Prueba](ejercicio3/ej3gifs/gif4.gif)

---

### 🔹 5. Eliminar miembro
- Hacer clic en **Delete** y confirmar elimina el miembro.
- Los cambios se reflejan en la tabla y en la base de datos mediante `deleteMember.php`.

![Demostración Prueba](ejercicio3/ej3gifs/gif5.gif)

---

### 🔹 6. Comportamiento del modal
- Cerrar el modal sin guardar limpia los campos.
- Si se edita un miembro y se cierra sin guardar, los datos originales permanecen intactos.

![Demostración Prueba](ejercicio3/ej3gifs/gif6.gif)

---

## ⚙ Tecnologías utilizadas
- HTML5 / CSS3  
- JavaScript (ES6)  
- PHP 7+  
- MySQL / phpMyAdmin  
- XAMPP como servidor local

---

## 👨‍💻 Autor
**Victor Ridao Chaves**  
Curso: 2º DAW – Asignatura: Entorno Cliente











