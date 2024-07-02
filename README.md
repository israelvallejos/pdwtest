# Aplicación de Agendamiento de citas

Esta es una aplicación simple de agendamiento construida con React y Redux. La aplicación permite a los usuarios ver, agregar, editar y eliminar citas. También incluye un filtro para mostrar citas por fecha.

## Características

- Ver citas agendadas
- Filtrar citas por fecha
- Agregar nuevas citas
- Editar y eliminar citas existentes
- Ver detalles de la cita

## Requisitos Técnicos

- React con Hooks
- Redux para la gestión del estado
- styled-components para el estilado
- json-server para simular API
- Jest y React Testing Library para pruebas

## Comenzando

### Prerrequisitos

- Node.js (>= 12.x)
- npm (>= 6.x)

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/scheduling-app.git
   cd scheduling-app


### Instalar Dependencias

```bash
npm install
```

### Iniciar el Servidor de la API Simulada

```bash
npm run server
```

### Iniciar la Aplicación React

```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Ejecutar Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm run test
```

## Arquitectura

La aplicación está estructurada de la siguiente manera:

- `src/`: Contiene todo el código fuente de la aplicación
  - `components/`: Contiene los componentes de React
    - `AppointmentForm.js`: Componente para agregar y editar citas
    - `AppointmentList.js`: Componente para mostrar la lista de citas
  - `redux/`: Contiene la lógica de Redux
    - `appointmentsSlice.js`: Slice de Redux para gestionar el estado de las citas
    - `store.js`: Configura el store de Redux
  - `App.js`: El componente principal de la aplicación
  - `index.js`: El punto de entrada de la aplicación
  - `GlobalStyles.js`: Contiene estilos globales para la aplicación

## Styled-components

La aplicación utiliza styled-components para el estilado. Los estilos globales están definidos en `GlobalStyles.js`, y cada componente tiene sus propios styled-components para un estilado modular y encapsulado.

## API Simulada

La aplicación utiliza json-server para simular la API para operaciones CRUD. El servidor simulado se ejecuta en [http://localhost:3001](http://localhost:3001) y sirve datos desde `db.json`.
```
