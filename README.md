# Fair Play Chile

Plataforma tecnológica para la gestión del deporte comunal con un enfoque humano y justo.

## 🚀 Tecnologías

Este proyecto está construido con un stack moderno y ligero:

- **Vue 3**: Framework progresivo de JavaScript.
- **Vite**: Herramienta de build rápida y servidor de desarrollo.
- **Pinia**: Gestión de estado intuitiva para Vue.
- **Vue Router**: Enrutamiento oficial para aplicaciones Vue.
- **CSS Personalizado**: Sistema de diseño minimalista y propio (sin frameworks CSS pesados).
- **EmailJS**: Servicio para el envío de correos desde el formulario de contacto.

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión LTS recomendada, v18+ o v20+).

### Pasos

1.  **Clonar el repositorio** (o descargar los archivos).
2.  **Instalar dependencias**:

    ```bash
    npm install
    ```

3.  **Configurar variables de entorno**:

    Crea un archivo `.env` en la raíz del proyecto basándote en el siguiente ejemplo:

    ```env
    VITE_EMAILJS_SERVICE_ID=TU_SERVICE_ID
    VITE_EMAILJS_TEMPLATE_ID=TU_TEMPLATE_ID
    VITE_EMAILJS_USER_ID=TU_USER_ID
    ```

    *Nota: Necesitarás una cuenta en [EmailJS](https://www.emailjs.com/) para obtener estas credenciales.*

4.  **Iniciar el servidor de desarrollo**:

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en `http://localhost:5173`.

## 📂 Estructura del Proyecto

- `src/assets`: Imágenes e iconos estáticos.
- `src/components`: Componentes reutilizables (`base`, `layout`, `ui`).
- `src/layouts`: Layouts principales de la aplicación.
- `src/pages`: Vistas principales (Home, Contacto, Servicios, Nosotros).
- `src/router`: Configuración de rutas.
- `src/stores`: Stores de Pinia (estado global).
- `src/styles`: Archivos CSS globales (`main.css`).

## 🎨 Estilos

El proyecto utiliza un sistema de diseño minimalista definido en `src/styles/main.css`. No depende de Tailwind CSS ni Bootstrap.

- **Variables CSS**: Se usan para colores, tipografía y espaciado consistente.
- **Clases de utilidad**: Se incluyen clases básicas como `.container`, `.btn`, `.card`, `.flex`, etc.

## 📧 Formulario de Contacto

El formulario de contacto en `/contacto` utiliza EmailJS para enviar mensajes directamente a tu correo electrónico sin necesidad de un backend complejo. Asegúrate de configurar correctamente las variables de entorno.
