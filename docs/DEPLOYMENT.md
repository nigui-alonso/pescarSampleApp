# Guía de Deployment

## Backend (Express) - Render.com

1. Crea una cuenta en [Render](https://render.com)
2. Selecciona "New Web Service"
3. Conecta tu repositorio de GitHub
4. Configura el servicio:
   - Name: mi-ecommerce-api
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free
5. Agrega variables de entorno:
   - `NODE_ENV=production`
   - `MONGODB_URI=tu_uri_de_mongodb_atlas`
   - `CLIENT_URL=url_de_tu_frontend`
   - `SERVER_URL=url_de_tu_server`

## Frontend (HTML/CSS/JS) - Netlify

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Selecciona "New site from Git"
3. Conecta tu repositorio
4. Configura el build:
   - Base directory: `client`
   - Publish directory: `client/src`
5. Configura variables de entorno si es necesario
6. Deploy!

### Configuración adicional Frontend

1. Crea un archivo `_redirects` en `client/src`:

   ```
   /* /index.html 200
   ```

2. Actualiza las URLs de la API en `api.js`:
   ```javascript
   const API_URL = process.env.NODE_ENV === "production" ? "https://tu-api.render.com/api" : "http://localhost:5001/api";
   ```
   Este paso será diferente con React

## Base de Datos - MongoDB Atlas

1. En tu cluster de MongoDB Atlas:
   - Configura IP Whitelist para Render
   - Asegura credenciales seguras
   - Habilita backups automáticos

## Dominio Personalizado (Opcional)

1. Compra un dominio (Namecheap, GoDaddy, etc.)
2. En Netlify:
   - Domain settings > Add custom domain
   - Configura DNS según instrucciones
3. Configura HTTPS (automático en Netlify)

## Monitoreo

1. Configura MongoDB Atlas Monitoring
2. Usa Render metrics para el backend
3. Configura Netlify analytics (opcional)

## CI/CD

1. En el repositorio:

   ```yml
   # .github/workflows/deploy.yml
   name: Deploy
   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Deploy to Render
           env:
             RENDER_TOKEN: ${{ secrets.RENDER_TOKEN }}
           run: |
             curl -X POST https://api.render.com/deploy/srv-xxx?key=$RENDER_TOKEN
   ```
