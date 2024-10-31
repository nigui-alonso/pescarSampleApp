# Backend pescarSampleApp

Backend para la aplicación pescarSampleApp utilizando Express y MongoDB.

## Requisitos Previos

- Node.js v18+
- MongoDB Community Edition & MongoDB Compass
- NPM

## Configuración Local

1. Instalar dependencias:

```bash
npm install
```

2. Configurar base de datos local (ver docs/DATABASE.md)

3. Configurar variables de entorno:

```bash
cp .env.example .env
```

4. Editar `.env`:

```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/nombre-proyecto
NODE_ENV=development
```

5. Iniciar servidor:

```bash
# Modo desarrollo
npm run dev

# Modo producción
npm start
```

## Estructura

```
server/
├── src/
│   ├── config/         # Configuraciones
│   ├── controllers/    # Controladores
│   ├── middleware/     # Middlewares
│   ├── models/         # Modelos Mongoose
│   ├── routes/         # Rutas
│   ├── utils/          # Utilidades
│   └── app.js         # Entrada principal
```

## Scripts Disponibles

- `npm start`: Inicia en producción
- `npm run dev`: Inicia con hot-reload
- `npm run lint`: Verifica estilo
- `npm run lint:fix`: Corrige estilo

## API Endpoints

- GET `/api/products`: Lista productos
- GET `/api/products/:id`: Obtiene un producto
