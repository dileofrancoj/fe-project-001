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