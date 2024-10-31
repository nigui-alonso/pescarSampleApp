# Guía de Configuración de MongoDB y MongoDB Compass

## Instalación Local

### 1. Instalar MongoDB Community Edition

- Windows:

  1. Descarga el instalador de [MongoDB Community Server](https://www.mongodb.com/try/download/community)
  2. Ejecuta el instalador y sigue las instrucciones
  3. Asegúrate de marcar la opción "Install MongoDB Compass"

- macOS:

  ```bash
  brew tap mongodb/brew
  brew install mongodb-community
  ```

### 2. Instalar MongoDB Compass

Si no se instaló con MongoDB:

1. Descarga [MongoDB Compass](https://www.mongodb.com/try/download/compass)
2. Instala siguiendo las instrucciones del instalador

## Configuración de Base de Datos Local

1. Inicia mongo localmente desde la terminal (buscar comandos Windows)
2. Inicia MongoDB Compass
3. Click en "New Connection"
4. Usa la URI de conexión local: `mongodb://localhost:27017`
5. Crea una nueva base de datos:
   - Click en "Create Database"
   - Database Name: `nombre-proyecto`
   - Collection Name: `products`

## Compartir Base de Datos Local con el equipo

### Opción 1: MongoDB Atlas Free Tier

1. Crea una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea un cluster gratuito
3. Configura Network Access para permitir conexiones desde cualquier IP
4. Crea un usuario de base de datos
5. Obtén la URI de conexión y compártela con el equipo

## Sincronización de Bases de Datos

### Exportar datos:

```bash
mongodump --db nombre-proyecto-dev --out ./backup
```

### Importar datos:

```bash
mongorestore --db nombre-proyecto-dev ./backup/nombre-proyecto-dev
```

## Preparación para Producción

1. Crea un cluster en MongoDB Atlas
2. Configura usuarios y accesos
3. Obtén la URI de conexión
4. Actualiza las variables de entorno:
   ```env
   MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/nombre-proyecto
   ```
