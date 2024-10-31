# Proyecto pescarSampleApp

Este proyecto es un sample de la estrcutura de un proyecto de una aplicación de e-commerce.

## Requisitos Previos

- Node.js (v18 o superior, se recomienda Node.js v18)
- MongoDB Community Edition & MongoDB Compass
- Git
- NPM (viene con Node.js)

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- `client/`: Contiene el código del frontend
- `server/`: Contiene el código del backend
- `docs/`: Contiene documentación detallada sobre diferentes aspectos del proyecto

## Configuración Inicial

1. Clona el repositorio:

```bash
git clone [URL_DEL_REPOSITORIO]
cd pescarSampleApp
```

2. Instala las dependencias del servidor:

```bash
cd server
npm install
```

3. Continúa la configuración con el readme del server

4. Configura e inicia el cliente:

```bash
cd client
npm install
npm run start
```

6. Accede a la aplicación en tu navegador:

- Backend: http://localhost:5001
- Frontend: http://localhost:8080 (o el puerto que indique live-server)

## Documentación Adicional

- [Configuración de la Base de Datos](docs/DATABASE.md)
- [Guía de Despliegue](docs/DEPLOYMENT.md)
- [Migración a React](docs/REACT-MIGRATION.md)

## Contribuir

1. Crea un branch para tu feature: `git checkout -b feature/nueva-caracteristica`
2. Commit tus cambios: `git commit -m 'Agrega nueva característica'`
3. Push al branch: `git push origin feature/nueva-caracteristica`
4. Crea un Pull Request
