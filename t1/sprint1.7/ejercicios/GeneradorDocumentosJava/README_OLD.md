````markdown
# GeneradorDocumentosJava

Proyecto para analizar proyectos Java y generar documentación técnica (Markdown, PlantUML, PDF).

Quickstart (local):

1. Install Node.js (>=18) and npm
2. Install dependencies:

```bash
cd backend
npm install
cd frontend
npm install
```

3. Run backend and frontend (dev):

```bash
# Backend
cd backend
npm run dev

# Frontend
cd backend/frontend
npm run dev -- --port 8978
```

Or use Docker (recommended):

```bash
# from repo root
docker compose up --build
```

Environment:
- See `.env.example` for LMStudio configuration and ports.

Notes and recommendations:
- The frontend sanitizes Markdown previews with DOMPurify.
- The backend download endpoint validates file locations to prevent path traversal and streams files.
- Use `Setup.ps1` on Windows to automate environment preparation.

If you want, I can also update CI workflows, add more tests, or improve the frontend components.


````