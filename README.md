# floristeria-dulces-petalos

## Introducción

Queremos crear una aplicación que muestre el catálogo de la floristería Dulces Pétalos.

- La aplicación tendrá dos vistas:
  1. Home: listado de productos
  2. Detalle de un producto
- La estructura deberá ceñirse a los mockups.
- Se implementará una SPA, donde el enrutado se hará en el código de cliente.
- El proyecto tendrá los siguientes script para la gestión de la aplicación:
  - start: Inicia el entorno de desarrollo
  - build: compila para producción
  - test: Lanza los test

### Listado de productos

- En esta página se visualizarán todos los productos que devuelve la petición al API.
- Permitirá hacer un filtrado de los productos, en función del criterio de búsqueda introducido por el usuario.
- Al seleccionar un producto, permitirá navegar al detalle de este.
- Se mostrará un máximo de cuatro elementos por fila. Se adaptará a la resolución del dispositivo.

### Detalle de producto

- En esta página se visualizarán los detalles de un producto
  - Imagen del producto
  - Descripción del producto
- Permitirá volver atrás en la navegación

## Catálogo de componentes

### HEADER: Cabecera

- Mostrará el nombre de la empresa y/o un icono, que será un enlace a la home.
- Mostrará breadcrumbs, con links para la navegación.

### SEARCH: Búsqueda

- Permitirá la introducción de una cadena de texto
- Se filtrarán los productos del listado en función de la cadena de texto, comparando nombre y nombre científico de la planta
- El filtrado se hará en tiempo real, a medida que el usuario introduzca la cadena de texto

### ITEM: Elemento del listado

- Dará la siguiente información de cada producto: ○ Imagen
  - Nombre
  - Nombre científico ○ Precio

### IMAGE: Imagen del producto

- Mostrará la imagen del producto

### DESCRIPTION: Descripción del producto

- Mostrará detalles del producto:
  - Nombre
  - Nombre científico
  - Precio
  - Riegos por semana
  - Fertilizante recomendado: Podrá ser “fosforado” o “nitrogenado”
  - Altura
