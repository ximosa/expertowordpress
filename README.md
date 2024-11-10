# Sitio Web Personal

Este repositorio contiene el código fuente de mi sitio web personal, construido con HTML, CSS y JavaScript.  El sitio web incluye las siguientes páginas:

* **Inicio:** Página principal del sitio web.
* **Sobre Mí:** Información sobre mí.
* **Contacto:** Información de contacto.
* **Blog:**  Un blog con artículos.  La paginación está implementada para mostrar los artículos en varias páginas.
* **Post:**  Página individual para cada artículo del blog.

## Tecnologías Utilizadas

* HTML
* CSS
* JavaScript (incluyendo manejo de eventos, `fetch` API y manipulación del DOM)
* **WPGraphQL:**  Se utiliza la API de WordPress a través de WPGraphQL para obtener los datos del blog.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

* `index.html`: Página de inicio.
* `about.html`: Página "Sobre Mí".
* `contact.html`: Página de contacto.
* `blog.html`: Página del blog.
* `post.html`: Plantilla para cada artículo del blog.
* `header.html`: Componente reutilizable para el encabezado.
* `footer.html`: Componente reutilizable para el pie de página.
* `main.js`:  Manejo de la navegación y carga de contenido dinámico.
* `blog.js`:  Manejo de la carga de artículos del blog y la paginación.
* `post.js`:  Manejo de la carga de artículos individuales del blog.
* `api.js`:  Funciones para realizar peticiones a la API GraphQL de WordPress.
* `README.md`: Este archivo.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio.
2. **Asegúrate de tener una instancia de WordPress configurada con el plugin WPGraphQL.**
3. Abre los archivos HTML en tu navegador web.  Las peticiones a la API de WordPress se realizan a través de la URL especificada en `api.js`.  Ajusta esta URL si es necesario.

## Contribuciones

Las contribuciones son bienvenidas.  Por favor, abre un issue o una pull request.
=======
# Sitio Web Personal

Este repositorio contiene el código fuente de mi sitio web personal, construido con HTML, CSS y JavaScript.  El sitio web incluye las siguientes páginas:

* **Inicio:** Página principal del sitio web.
* **Sobre Mí:** Información sobre mí.
* **Contacto:** Información de contacto.
* **Blog:**  Un blog con artículos.  La paginación está implementada para mostrar los artículos en varias páginas.
* **Post:**  Página individual para cada artículo del blog.

## Tecnologías Utilizadas

* HTML
* CSS
* JavaScript (incluyendo manejo de eventos, `fetch` API y manipulación del DOM)
* **WPGraphQL:**  Se utiliza la API de WordPress a través de WPGraphQL para obtener los datos del blog.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

* `index.html`: Página de inicio.
* `about.html`: Página "Sobre Mí".
* `contact.html`: Página de contacto.
* `blog.html`: Página del blog.
* `post.html`: Plantilla para cada artículo del blog.
* `header.html`: Componente reutilizable para el encabezado.
* `footer.html`: Componente reutilizable para el pie de página.
* `main.js`:  Manejo de la navegación y carga de contenido dinámico.
* `blog.js`:  Manejo de la carga de artículos del blog y la paginación.
* `post.js`:  Manejo de la carga de artículos individuales del blog.
* `api.js`:  Funciones para realizar peticiones a la API GraphQL de WordPress.
* `README.md`: Este archivo.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio.
2. **Asegúrate de tener una instancia de WordPress configurada con el plugin WPGraphQL.**
3. Abre los archivos HTML en tu navegador web.  Las peticiones a la API de WordPress se realizan a través de la URL especificada en `api.js`.  Ajusta esta URL si es necesario.

## Contribuciones

Las contribuciones son bienvenidas.  Por favor, abre un issue o una pull request.
