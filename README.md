# floristeria-dulces-petalos

### Desplegada en Vercel para su visualización

https://floristeria-dulces-petalos.vercel.app/

### Tecnologías

- Vue 3: He usado el framework de JavaScript para construir la interfaz del usuario en SPA.
- Vite: He usado este bundler para compilar el código y servirlo en un servidor de desarrollo.
- Vuetify: He usado esta librería de componentes para construir la interfaz de usuario.
- Vue Router: He usado esta librería para gestionar la navegación virtualizada entre páginas.
- Pinia: Con esta librería de Vue puedo gestionar el estado de manera globalizada pudiendo consumir las diferentes necesidades de cada vista.
- Cypress: He usado esta herramienta para realizar los test de integración y end-to-end. --Sin terminar--

### El porqué

La idea principal es que el estado se gestione globalmente para poder facilitar la comunicación y la interacción de los datos entre los diferentes componentes de la aplicación. De esta manera se puede tener un control más preciso de los datos y de las acciones que se realizan en la aplicación. Cada vista consume el esta global y se actualiza en tiempo real, dando pie a que otras vistas y componentes puedan consumir los datos actualizados.

La vista _home_ es la vista principal, al crearse demanda datos a través de una acción invocada directamente en el _store_ que se encarga de gestionar los datos de la aplicación. Una vez que se obtienen los datos, se actualiza el _estado global_ y se renderiza la vista con los datos obtenidos.

Una vez que el usuario hace click en un elemento de la lista, se inyecta el _id_ del elemento en los parámetros de la ruta _/details_ de la aplicación y se redirije a la ruta de destino. En esta vista se consume el _estado global_ y se obtienen los datos del elemento seleccionado. Se renderiza la vista con los datos obtenidos.

### Instalación

```bash
npm install
```

### Compilación y recarga en caliente para el desarrollo

```bash
npm run start
```

### Compilación y minificación para la producción

```bash
npm run build
```

### test end-to-end

```bash
npm run test:e2e
```
