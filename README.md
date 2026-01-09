# Sistema de Gestión para Veterinaria

Este proyecto es un sistema web que desarrollé para gestionar la información interna de una veterinaria.  
La idea principal fue construir una aplicación **realista**, parecida a lo que se usaría en un entorno real de trabajo, separando backend y frontend y modelando bien las relaciones entre los datos.

El sistema está pensado como un **portal para el veterinario** (backoffice), donde se puede administrar todo lo relacionado con propietarios, mascotas y reservaciones.

---

## ¿Qué hace el sistema?

Actualmente el sistema permite:

- Crear, editar y eliminar **propietarios**
- Registrar **mascotas** asociadas a cada propietario
- Crear **reservaciones** para las mascotas
- Confirmar o cancelar reservaciones
- Enviar un **correo** al propietario cuando una reservación es confirmada o cancelada
- Ver un **dashboard** con información general del sistema
- Ver el **historial de reservaciones** de cada mascota

La aplicación está organizada de forma que todo gira en torno a las relaciones:
propietario → mascotas → reservaciones.

---

## Cómo está construido

El proyecto está separado en dos partes:

### Backend
- API REST desarrollada con **Laravel**
- Base de datos **MySQL**
- Uso de Eloquent para relaciones entre modelos
- Endpoints REST más algunos endpoints específicos (métricas, confirmación/cancelación)

### Frontend
- Aplicación en **React** usando Vite
- **Tailwind CSS** para estilos
- **Axios** para consumir la API
- **React Router** para la navegación

---

## Funcionalidades principales

### Propietarios
- CRUD completo
- Visualización de las mascotas asociadas

### Mascotas
- CRUD completo
- Asociación a un propietario
- Vista de detalle con historial de reservaciones

### Reservaciones
- Creación de reservaciones desde una mascota
- Estados: pendiente, confirmada y cancelada
- Confirmación y cancelación desde el panel del veterinario
- Envío de correo al propietario cuando cambia el estado

### Dashboard
- Total de mascotas registradas
- Reservaciones del día
- Reservaciones pendientes

---

## Cómo levantar el proyecto

### Backend

```bash
cd VetBackEnd
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve

## Para el FrontEnd

cd VetFrontEnd
npm install
npm run dev
