# Actividad 1: Creación del Proyecto del Chatbot

## 🧩 Historia de Usuario
**Como** estudiante de desarrollo web,  
**quiero** crear un proyecto base en React que funcione correctamente en mi navegador,  
**para** tener una base estable sobre la que construir mi chatbot en las siguientes actividades.

---

## 🧱 Tareas realizadas

### 1️⃣ Creación del proyecto React
- Proyecto creado con Vite y React.
- Dependencias instaladas correctamente.
- Comprobación de arranque inicial exitosa.

### 2️⃣ Ejecución y verificación del entorno
- Servidor de desarrollo arrancado con `npm run dev`.
- Proyecto visible en `http://localhost:5173/`.
- No se observaron errores en consola.

### 3️⃣ Personalización inicial del proyecto
- Se modificó `App.jsx` para mostrar el nombre y logotipo provisional del chatbot:
  - Texto mostrado: "🤖 Bienvenido a Mi Chatbot"  
  - Logo provisional agregado en `public/assets/logo.png` (opcional).

### 4️⃣ Preparación de la estructura base
Estructura de carpetas creada para organizar el proyecto:

```
src/
├── App.jsx
├── main.jsx
├── components/
├── services/
├── styles/
public/
└── assets/

```

## También se añaden los ".gitkeep" opcionales para mantener carpetas vacías en Git.

### 5️⃣ Evidencia del funcionamiento
A continuación se muestran las capturas/GIFs que documentan cada prueba:

![Arranque del proyecto](./ejercicios/gifs/gif1.gif)

-------------------------------------------------------------------------------------------------

# Actividad 2 – Personalización Visual del Chatbot

## 🧠 Tareas

### 🎨 Tarea 1: Identidad visual del chatbot

Definición del nombre, eslogan y selección de imagen/logotipo para SHODAN.

### 🖼 Tarea 2: Sustitución de elementos genéricos

Eliminados todos los recursos visuales de React y reemplazados por los propios del chatbot.

### 🧭 Tarea 3: Ajuste visual mínimo

Adaptación de la interfaz para mostrar el nombre, imagen y eslogan del chatbot de forma centrada y limpia.

### 🗂 Tarea 4: Organización de recursos gráficos

Estructura final:

```
public/
 └── assets/
     ├── images/
     │   └── shodan.gif
     └── icons/
         └── favicon.ico
```

### 📝 Tarea 5: Reflejar la identidad en la interfaz

Se ha integrado el logotipo animado, el nombre “SHODAN” y el eslogan en la pantalla principal.
También se añadió un **favicon personalizado** para reforzar la identidad del asistente.

---

## 🧪 Pruebas funcionales

**Prueba:**
Verificar que la aplicación muestra correctamente la nueva identidad visual sin elementos de React.

**Resultado:**

* La aplicación carga mostrando la identidad de SHODAN.
* Logo, nombre y eslogan visibles.
* Estructura modular y organizada según lo requerido.

---

## 5️⃣ Evidencia del funcionamiento

A continuación se muestran las capturas/GIFs que documentan la actividad:

![Identidad visual SHODAN](./ejercicios/gifs/gif2 (1).gif)



