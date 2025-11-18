### ENTORNO CLIENTE: SPRINT 1.5 ###
---

# Actividad 1 – Mapa de rutas y contenedores funcionales

## Historia de usuario
**Como** usuario que entra en la aplicación,  
**quiero** entender qué pantallas existen y moverme entre ellas,  
**para** acceder rápidamente al chat, a mis conversaciones, a la Pokédex y a los ajustes.

---

## Tareas realizadas

### Mapa de rutas
Se han definido las rutas principales de la aplicación:

| Ruta | Vista |
|------|-------|
| `/` | Chat (vista principal) |
| `/conversaciones` | Conversaciones (listado) |
| `/conversacion/:id` | Conversación (detalle con historial) |
| `/pokedex` | Pokédex (demostrador POKEAPI) |
| `/ajustes` | Ajustes (preferencias del asistente/modelo) |

---

### Contenedor visual común
- Se ha creado `AppLayout.jsx` que incluye:
  - Cabecera persistente (`header`)  
  - Área de contenido (`main`) donde se cargan las vistas

---

### Elementos de navegación
- Se ha creado `NavBar.jsx` con enlaces funcionales a todas las vistas.  
- Los enlaces funcionan con **clic** y **teclado (Tab + Enter)**.

---

## Estructura de carpetas

```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂Layout
 ┃ ┃ ┗ 📜AppLayout.jsx
 ┃ ┣ 📂Navigation
 ┃ ┃ ┗ 📜NavBar.jsx
 ┃ ┗ 📂Views
 ┃ ┃ ┣ 📜ChatView.jsx
 ┃ ┃ ┣ 📜ConversationsView.jsx
 ┃ ┃ ┣ 📜ConversationView.jsx
 ┃ ┃ ┣ 📜PokedexView.jsx
 ┃ ┃ ┗ 📜SettingsView.jsx
 ┣ 📂services
 ┣ 📂styles
 ┃ ┗ 📜layout.css
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```
---

## Pruebas funcionales realizadas
- ✅ Click en cada enlace cambia correctamente la vista.  
- ✅ La cabecera se mantiene estable mientras se navega.  
- ✅ Enlaces accesibles con teclado.  

---

## GIF de recorrido completo

_Añadir aquí el GIF que muestre la navegación entre todas las vistas:_

![Recorrido de navegación](ruta/a/tu-gif.gif)

