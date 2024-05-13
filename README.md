# Inicialización del proyecto

## ESLINT

```
npm init @eslint/config
yarn add -D eslint-fdl-base-conf # agregar en .eslintrc
```
## Librerias para el proyecto

```
yarn add axios lvlup-react-hooks formik zod react-router-dom
```

## Tailwind

https://tailwindcss.com/docs/


```
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## ¿Qué vamos a hacer?
- Crear un sistema de rutas apoyandonos de react-router-dom
- Crear ruta de Login que muestre el formulario
- Implementación de formik y zod para validar los datos
- Implementar instancia de axios con interceptor para 401
- Utilizar useAxios && useThrottle de lib propia
- Creación de contexto para guardar los datos del usuario
- Ruta privada para validar usuario

<hr />

## Routing main concepts

### SPA

Tipo de aplicación web en donde todas las pantallas coexisten dentro de la misma página (sin recargar el browser)

Cuentan con un solo punto de entrada (generalmente index.html)

Experiencia de usuario: El contenido se muestra más rápido (la página no se recarga)

src/
  routes/
    Navigation.tsx
    routes.ts
  components/
  pages/

### Lazy Loading

Lazy loading es una técnica de optimización (experiencia de usuario, tiempo) que retrasa la carga de recursos (imagenes, videos, scripts) hasta que sean necesarios / peticion

### Beneficios
- Mejora la velocidad de la carga inicial (menor transferencia de datos para el usuario)
- Reduce consumo de datos
- Mejora seguridad evitando que se descarguen modulos privados
- Mejora el SEO: Es una consecuencia de reducir el tiempo de carga