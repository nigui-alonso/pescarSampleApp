# Frontend pescarSampleApp

Frontend para la aplicación pescarSampleApp utilizando HTML, CSS y JavaScript vanilla.

## Requisitos Previos

- Node.js v18+
- NPM

## Configuración Local

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar servidor de desarrollo:

```bash
npm start
```

3. Abrir http://localhost:8080 (o el puerto que indique live-server)

## Estructura

```
client/
├── src/
│   ├── assets/        # Imágenes y recursos
│   ├── css/           # Estilos
│   ├── js/           # Scripts
│   ├── utils/        # Utilidades
│   ├── index.html    # Página principal
│   └── products.html # Página de productos
```

## Scripts Disponibles

- `npm start`: Inicia servidor de desarrollo
- `npm run lint`: Verifica estilo
- `npm run lint:fix`: Corrige estilo

## Páginas

- `/`: Home con hero section y about us
- `/products.html`: Grilla de productos

## Migración Futura

Ver `docs/REACT-MIGRATION.md` para guía de migración a React.
