# Historia del automovilismo de la provincia de Córdoba

> Una colaboración entre el **Aula de Software Libre** y el **Aula del Motor** de la Universidad de Córdoba

## Acerca del Proyecto

Este proyecto web ha sido desarrollado como parte de la colaboración entre el Aula de Software Libre (ASL) y el Aula del Motor de la Universidad de Córdoba para dar visibilidad y promover el evento **"Historia del automovilismo de la provincia de Córdoba"**.

El evento se celebrará del **7 al 15 de noviembre** en el **Rectorado de la Universidad de Córdoba** y busca promover la Historia del automovilismo de la provincia de Córdoba así como celebrar una década de trayectoria del Aula del Motor.

## Tecnologías Utilizadas

Esta es una aplicación web moderna construida con:

- **[Next.js 15.3.5](https://nextjs.org)** - Framework de React para producción
- **[React 19](https://react.dev)** - Biblioteca de JavaScript para interfaces de usuario
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipado estático
- **[Tailwind CSS v4](https://tailwindcss.com)** - Framework de CSS utility-first
- **[Turbopack](https://turbo.build/pack)** - Bundler de nueva generación para desarrollo rápido

## Instalación y Desarrollo

### Configuración Inicial

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd decadaEnMarcha
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con Turbopack
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter de código

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx      # Layout principal de la aplicación
│   └── page.tsx        # Página principal
├── components/
│   ├── intro/          # Sección de introducción
│   ├── Invitados/      # Sección de invitados al evento
│   ├── Schedule/       # Calendario de actividades
│   ├── Sponsors/       # Patrocinadores del evento
│   └── AboutUs/        # Información sobre el evento
└── assets/             # Recursos estáticos
```

## Colaboradores

Este proyecto es una colaboración entre:

- **Aula de Software Libre (ASL)** - Universidad de Córdoba
- **Aula del Motor (AM)** - Universidad de Córdoba

## Información del Evento

- **Fecha:** 7-15 de Noviembre
- **Ubicación:** Rectorado de la Universidad de Córdoba
- **Temática:** Historia del automovilismo

---
